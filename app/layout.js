import './globals.css';

export const metadata = {
  title: 'Pokemon Masters Only',
  description: 'For all the Pokemon lovers out there',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
