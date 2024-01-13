import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from './_components/Common/Header'
import Footer from './_components/Common/Footer'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'File Shareing App',
  description: 'Share your important file to your partner safe and easy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
