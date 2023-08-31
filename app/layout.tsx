import './globals.css'
import type { Metadata } from 'next'
import { Dosis, Amatic_SC } from 'next/font/google'
import { CMS_NAME, HOME_OG_IMAGE_URL, navigation } from '@/lib/constants'
import Menu from '@/components/menu'
import Footer from '@/components/footer'
import GoogleReCaptchaProvider from './google-recaptcha-provider'

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


// const Meta = () => {
//   return (
//     <Head>
//       <link
//         rel="apple-touch-icon"
//         sizes="180x180"
//         href="/favicon/apple-touch-icon.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="32x32"
//         href="/favicon/favicon-32x32.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="16x16"
//         href="/favicon/favicon-16x16.png"
//       />
//       <link rel="manifest" href="/favicon/site.webmanifest" />
//       <link
//         rel="mask-icon"
//         href="/favicon/safari-pinned-tab.svg"
//         color="#000000"
//       />
//       <link rel="shortcut icon" href="/favicon/favicon.ico" />
//       <meta name="msapplication-TileColor" content="#000000" />
//       <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
//       <meta name="theme-color" content="#000" />
//       <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
//       <meta
//         name="description"
//         content={`${CMS_NAME}.`}
//       />
//       <meta property="og:image" content={HOME_OG_IMAGE_URL} />
//     </Head>
//   )
// }

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
        <GoogleReCaptchaProvider reCaptchaKey={ typeof process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY != "undefined" ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : '' }>
          <Menu itemsMenu={navigation} />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </GoogleReCaptchaProvider>
      </body>
    </html>
  )
}