import { Inter } from 'next/font/google'
import './globals.css'
import CustomNav from '@/Components/CustomNav'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNav />
        
        <div>{children}</div>

        <Footer/>
      
      </body>
    </html>
  )
}
