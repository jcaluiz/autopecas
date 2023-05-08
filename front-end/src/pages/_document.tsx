import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap" rel="stylesheet" />
        <title>Home - VR Auto Peças</title>
      </Head>
      <body className='overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
