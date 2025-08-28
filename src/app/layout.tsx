import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shengyang (Shawn) Dong - 个人简历',
  description: 'Shengyang (Shawn) Dong的在线简历 - Data Scientist / Full Stack Developer，专注于AI和数据科学，具有丰富的机器学习和全栈开发经验。',
  openGraph: {
    title: 'Shengyang (Shawn) Dong - 个人简历',
    description: 'Data Scientist / Full Stack Developer，专注于AI和数据科学领域',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
