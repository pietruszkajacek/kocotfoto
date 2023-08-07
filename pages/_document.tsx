import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-tlo'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
