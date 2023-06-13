import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Analyze the styles of any website - Scan My Design',
  description: 'Find the styles, colors and fonts of any website',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 -z-10 opacity-80
      "></div>
        {children}
        <Script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2391523060127866"
          strategy="lazyOnload"
          crossOrigin="anonymous" />
      </body>
    </html>
  )
}
