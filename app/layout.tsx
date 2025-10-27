import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stellar Space Agency',
  description: 'Exploring the cosmos, advancing humanity',
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
