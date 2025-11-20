import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminToken } from '@/lib/adminAuth'

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    // Get the token from localStorage (this won't work in middleware, so we'll handle it client-side)
    // For now, we'll allow the request and handle auth in the component
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
