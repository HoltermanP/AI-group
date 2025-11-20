import { NextRequest, NextResponse } from 'next/server'

// Super simpele gebruikers database
const USERS = {
  patrick: 'Patrick2024!Admin',
  luit: 'Luit2024!Admin',
  admin: 'Admin2024!Secure'
}

export async function POST(request: NextRequest) {
  try {
    console.log('Login API called')
    
    // Get form data
    const formData = await request.formData()
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    
    console.log('Login attempt:', username)
    
    // Simple check
    if (USERS[username.toLowerCase() as keyof typeof USERS] === password) {
      console.log('Login successful!')
      
      // Direct redirect to admin page
      return NextResponse.redirect(new URL('/admin', request.url), { status: 302 })
    } else {
      console.log('Login failed!')
      
      // Redirect back to login with error
      return NextResponse.redirect(new URL('/admin/login?error=invalid', request.url), { status: 302 })
    }
  } catch (error) {
    console.error('Login error:', error)
    
    // Redirect back to login with error
    return NextResponse.redirect(new URL('/admin/login?error=server', request.url), { status: 302 })
  }
}