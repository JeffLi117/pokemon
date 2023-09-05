import '../globals.css';
import { Inter } from 'next/font/google';
import Nav from '../components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon Masters Only',
  description: 'For all the Pokemon lovers out there',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  )
}
