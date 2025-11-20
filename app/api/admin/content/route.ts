import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/adminAuth'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const SITE_DATA_PATH = join(process.cwd(), 'data', 'site.json')

export async function GET() {
  try {
    const siteData = JSON.parse(readFileSync(SITE_DATA_PATH, 'utf8'))
    return NextResponse.json(siteData)
  } catch (error) {
    console.error('Error reading site data:', error)
    return NextResponse.json(
      { error: 'Fout bij laden van content' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Check admin authentication
    const admin = getAdminFromRequest(request)
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { fieldPath, value } = await request.json()

    if (!fieldPath || value === undefined) {
      return NextResponse.json(
        { error: 'Field path en value zijn verplicht' },
        { status: 400 }
      )
    }

    // Read current site data
    const siteData = JSON.parse(readFileSync(SITE_DATA_PATH, 'utf8'))

    // Update the specific field
    const pathParts = fieldPath.split('.')
    let current = siteData
    
    // Navigate to the parent object
    for (let i = 0; i < pathParts.length - 1; i++) {
      if (!current[pathParts[i]]) {
        current[pathParts[i]] = {}
      }
      current = current[pathParts[i]]
    }
    
    // Set the final value
    current[pathParts[pathParts.length - 1]] = value

    // Write back to file
    writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2))

    return NextResponse.json({
      success: true,
      message: 'Content succesvol bijgewerkt'
    })

  } catch (error) {
    console.error('Error updating content:', error)
    return NextResponse.json(
      { error: 'Fout bij bijwerken van content' },
      { status: 500 }
    )
  }
}
