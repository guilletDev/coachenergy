import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Coach Energy - Entrená con Energía, Viví con Fuerza",
  description:
    "Coach Energy - Tu centro de entrenamiento premium. Fuerza, funcional, resistencia y más. Entrenadores profesionales, equipamiento moderno. ¡Tu mejor versión empieza hoy!",
  keywords:
    "gimnasio, fitness, entrenamiento, fuerza, funcional, resistencia, entrenador personal, Coach Energy, membresía gimnasio, ejercicio",
  authors: [{ name: "Coach Energy" }],
  creator: "Coach Energy",
  publisher: "Coach Energy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://coach-energy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coach Energy - Entrená con Energía, Viví con Fuerza",
    description:
      "Coach Energy - Tu centro de entrenamiento premium. Fuerza, funcional, resistencia. Entrenadores profesionales certificados. ¡Tu mejor versión empieza hoy!",
    url: "https://coach-energy.vercel.app/",
    siteName: "Coach Energy",
    images: [
      {
        url: "https://coach-energy.vercel.app/images/og-image.jpg",
        width: 1024,
        height: 630,
        alt: "Coach Energy - Centro de entrenamiento premium con coaches profesionales",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Energy - Entrená con Energía, Viví con Fuerza",
    description:
      "Coach Energy - Tu centro de entrenamiento premium. Fuerza, funcional, resistencia. Entrenadores profesionales certificados.",
    images: ["https://coach-energy.vercel.app/images/og-image.jpg"],
    creator: "@coachenergy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
