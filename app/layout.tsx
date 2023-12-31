import React from "react"
import './global.css'

export const metadata = {
  title: 'Crypto | Million and Up',
  favicon: '/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
