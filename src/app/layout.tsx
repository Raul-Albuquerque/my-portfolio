import type { Metadata } from 'next'
import './globals.css'
import Providers from './Providers'
import SocialMediaBar from '@/components/SocialMediaBar'
import NavBar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Raul Albuquerque - Front-End Developer',
  description: 'Front-End Developer',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Providers>
        <div className="main-container">
          <SocialMediaBar />
          {children}
          <NavBar />
        </div>
      </Providers>
    </html>
  )
}
