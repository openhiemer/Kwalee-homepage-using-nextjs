
import Navigation from '@/Components/Navigation'
import './globals.css'
import './page2.css'
import './page3.css'
import './page4.css'
import './page5.css'
import './page6.css'
import './page7.css'
import './Footer.css'
import './media.css'
import Footer from '@/Components/Footer'




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
