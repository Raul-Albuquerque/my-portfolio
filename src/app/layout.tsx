import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers, { Body } from './Providers'

export const metadata: Metadata = {
  title: 'Raul Albuquerque - Desenvolvedor Front-end',
  description: 'FrontEnd Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Providers>{children}</Providers>
    </html>
  )
}
