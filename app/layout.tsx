import './globals.css'
import type { Metadata } from 'next'
import { Dosis, Amatic_SC } from 'next/font/google'
import { CMS_NAME, HOME_OG_IMAGE_URL, navigation } from '@/lib/constants'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

const dosis = Dosis({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-dosis'
})

const amaticsc = Amatic_SC({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  display: 'swap',
  variable: '--font-amaticsc'
})

export const metadata: Metadata = {
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png" }, 
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png" }, 
    { rel: "manifest", url: "/favicon/site.webmanifest" }, 
    { rel: "apple-touch-icon", sizes: "180x180", url: "https://example.com/apple-icon.png" },
    { rel: "mask-icon", color: "#000000", url: "/favicon/safari-pinned-tab.svg" },
    { rel: "shortcut icon", url: "/favicon/favicon.ico" },
    { rel: "alternate", type: "application/rss+xml", url: "/feed.xml" },
  ],
  title: `${CMS_NAME}`,
  description: "KAMIL KOCOT FOTOGRAFIA - ",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${dosis.variable} ${amaticsc.variable}`} lang="pl">
      <body className={'bg-main-bg-color'}>
        {/* TODO: add tag current menu item */}
        <Menu itemsMenu={navigation} />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}