import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta name="application-name" content="Lügat" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lügat" />
        <meta name="description" content="Lügat bir sözlük uygulamasıdır." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#db7094" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#db7094" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://lugat.vercel.app" />
        <meta name="twitter:title" content="Lügat" />
        <meta name="twitter:description" content="Lügat bir sözlük uygulamasıdır." />
        <meta
          name="twitter:image"
          content="https://lugat.vercel.app/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@emrekayik0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lügat" />
        <meta property="og:description" content="Lügat bir sözlük uygulamasıdır." />
        <meta property="og:site_name" content="Lügat" />
        <meta property="og:url" content="https://lugat.vercel.app" />
        <meta
          property="og:image"
          content="https://lugat.vercel.app/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
