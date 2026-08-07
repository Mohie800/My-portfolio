import type React from "react"
import type { Metadata } from "next"
import { Archivo_Black, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--archivo",
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--plex-sans",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--plex-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mohyeldeen.dev"),
  title: "Mohyeldeen Abdulazeem — Full-Stack TypeScript Developer",
  description:
    "Full-stack TypeScript developer in Buraidah, Saudi Arabia. Realtime systems end to end — real-estate platforms, CRMs and messaging services by day, multiplayer games on Google Play after hours.",
  openGraph: {
    title: "Mohyeldeen Abdulazeem — Full-Stack TypeScript Developer",
    description:
      "Realtime systems, end to end. React, Next.js, Node.js, NestJS, WebSockets, PostgreSQL — and multiplayer games on Google Play.",
    url: "https://mohyeldeen.dev",
    siteName: "mohyeldeen.dev",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  )
}
