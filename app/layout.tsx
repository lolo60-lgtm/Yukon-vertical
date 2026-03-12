import type { Metadata, Viewport } from 'next'
import { Dela_Gothic_One, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const delaGothicOne = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-dela',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Yukon KOD 95 — Получи Код 95 для работы в Европе',
  description:
    'Помогаем водителям легально работать в Европе. Обучение онлайн, всего 1 визит в Краков. Короткий и длинный курс Код 95, замена прав, чип-карта.',
}

export const viewport: Viewport = {
  themeColor: '#00416a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`${delaGothicOne.variable} ${playfairDisplay.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
