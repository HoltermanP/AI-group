/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

// Basis-CSP tegen XSS; 'unsafe-inline' is gebruikelijk bij Next.js zonder nonce-middleware.
// 'unsafe-eval' alleen in development (Fast Refresh).
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://via.placeholder.com https://api.dicebear.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  'connect-src \'self\' https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://www.googletagmanager.com',
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ')

// Beperkt browser-API's (camera, microfoon, locatie, enz.); lege () = niet toegestaan.
// fullscreen=(self) laat full-screen vanaf dezelfde origin nog toe (bijv. video).
const permissionsPolicy = [
  'accelerometer=()',
  'camera=()',
  'display-capture=()',
  'geolocation=()',
  'gyroscope=()',
  'magnetometer=()',
  'microphone=()',
  'payment=()',
  'usb=()',
  'fullscreen=(self)',
].join(', ')

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '0',
          },
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: permissionsPolicy,
          },
        ],
      },
    ]
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'api.dicebear.com'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
}

module.exports = nextConfig
