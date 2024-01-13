import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Layout from './_components/Common/Layout'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'File Shareing App',
  description: 'Share your important file to your partner safe and easy.',
}

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>
}
