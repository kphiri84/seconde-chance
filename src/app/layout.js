import './globals.css'
import '../styles/globals.scss'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Inter, Press_Start_2P } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p'
})

export const metadata = {
  title: 'Seconde Chance - Boutique de Jeux Vidéo Rétro',
  description: 'Découvrez notre sélection de jeux vidéo et consoles rétro soigneusement choisis, des classiques intemporels aux dernières pépites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${pressStart2P.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
