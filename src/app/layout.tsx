import './globals.css'
import { Inter } from 'next/font/google'



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
      {/* <Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2391523060127866"
          crossOrigin="anonymous"></Script>
      </Head> */}
      <body className={inter.className}>

        {children}</body>
    </html>
  )
}
