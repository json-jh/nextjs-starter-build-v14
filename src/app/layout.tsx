import ThemeProvider from '@/context/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JSON JH',
  description: 'JSON JH, simple next js app, react',
  manifest : '/favicon/manifest.json'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="ko" >
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      </head>
      <body>
        <ThemeProvider theme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
