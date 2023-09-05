import '../globals.css';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Pokemon Masters Only',
  description: 'For all the Pokemon lovers out there',
}

export default function RootLayout({ children }) {
  return (
    <section>
      <Nav></Nav>
      {children}
    </section>
  )
}
