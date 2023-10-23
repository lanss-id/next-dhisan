import type { Metadata } from 'next'
import { Poppins, El_Messiri, Overpass} from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['200', '300', '400'],
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-poppins'
})

const elMessiri = El_Messiri({ 
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-elMessiri'
})
const overpass = Overpass({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-overpass'
})

export const metadata: Metadata = {
  title: 'Dhisan Atelier: Studio Arsitek Kolaboratif untuk Pengembang di Indonesia',
  description: 'Dhisan Atelier adalah studio arsitek yang berfokus pada kolaborasi dengan developer-developer Indonesia. Temukan desain bangunan inovatif dan solusi arsitektur yang terbaik untuk proyek Anda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#111] text-white ${poppins.variable} ${elMessiri.variable} ${overpass.variable}`}>{children}</body>
    </html>
  )
}
