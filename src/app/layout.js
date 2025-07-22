import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })
const GA_TRACKING_ID = 'G-TMZ6VKNC5V'

export const metadata = {
  title: 'Denis Scarabelli',
  description: 'Engenheiro de Software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
