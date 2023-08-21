import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "React Photo Album - Next.JS",
    description: "React Photo Album - Next.JS",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pl">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }