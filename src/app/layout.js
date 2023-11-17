import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import CustomNav from '@/Components/CustomNav'
import Footer from '@/Components/Footer'
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        <CustomNav />
        
        <div>{children}</div>

        <Footer/>
      
      </body>
    </html>
  )
}
