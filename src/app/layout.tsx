import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emilija Kastratović — Portfolio',
  description: 'Software Engineer & Cybersecurity Researcher — Portfolio of Emilija Kastratović',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){return;}document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body className={`${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
