import type { Metadata, Viewport } from 'next'
import { Noto_Sans, Plus_Jakarta_Sans } from 'next/font/google'

import { MainLayout } from '@/components/layout/main-layout'
import { SonnerToaster } from '@/components/sooner-toast'

import './globals.css'

// 인도네시아어를 위한 Noto Sans 폰트 설정
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans',
})

// 인도네시아에서 인기 있는 Plus Jakarta Sans 폰트
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Dapatkan uang saat Anda tidur.',
  description: 'Rata-rata, Anda bisa mendapatkan 1.000 Rp dalam 2 minggu.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  /**
   * **iOS의 "safe area"**를 사용하는 데 영향을 미치는 속성.
   * cover 를 설정하면 콘텐츠가 디바이스의 모든 화면 영역을 커버하며, 노치 영역까지 포함됩니
   *
   */
  viewportFit: 'cover',
  userScalable: false,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${notoSans.variable} ${plusJakartaSans.variable} font-sans`}>
        <SonnerToaster />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
