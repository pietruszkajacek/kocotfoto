import { AppProps } from 'next/app'
import '../styles/index.css'
import { Amatic_SC, Dosis } from 'next/font/google'
// import 'dotenv/config'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const amaticsc = Amatic_SC({
  subsets: ['latin'],
  weight: ["700"],
  variable: '--font-amaticsc',
});

const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}> 
      <main className={`${amaticsc.variable} ${dosis.variable}`}>
        <Component {...pageProps} />
      </main>
    </GoogleReCaptchaProvider>
  )
}
