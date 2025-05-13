import './globals.css'
import '../styles/globals.scss'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seconde Chance - Boutique de Jeux Vidéo Rétro',
  description: 'Découvrez notre sélection de jeux vidéo et consoles rétro soigneusement choisis, des classiques intemporels aux dernières pépites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
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
