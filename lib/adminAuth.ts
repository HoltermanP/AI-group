import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export interface AdminUser {
  username: string
  role: string
  name: string
  iat: number
}

export function verifyAdminToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser
    return decoded
  } catch (error) {
    return null
  }
}

export function getAdminFromRequest(request: NextRequest): AdminUser | null {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  return verifyAdminToken(token)
}

export function createAdminMiddleware(handler: (request: NextRequest, admin: AdminUser) => Promise<Response>) {
  return async (request: NextRequest): Promise<Response> => {
    const admin = getAdminFromRequest(request)
    
    if (!admin) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    return handler(request, admin)
  }
}
