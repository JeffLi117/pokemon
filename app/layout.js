import './globals.css';
import localFont from '@next/font/local';

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/slkscr.ttf",
      weight: "400"
    }
  ],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Pokemon Masters Only',
  description: 'For all the Pokemon lovers out there',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
