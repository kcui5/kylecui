import type { Metadata } from "next"
import { Geist, Geist_Mono, Mea_Culpa, Press_Start_2P } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const siteUrl = "https://kylecui.dev"
const siteDescription =
  "Kyle Cui — UC Berkeley CS Honors + Physics, ex-Fish Audio (3M → 12M ARR in four months). Obsessed with systematizing growth for consumer applications."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kyle Cui",
    template: "%s — Kyle Cui",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Kyle Cui",
    title: "Kyle Cui",
    description: siteDescription,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Kyle Cui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kile_sway",
    creator: "@kile_sway",
    title: "Kyle Cui",
    description: siteDescription,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kyle Cui",
      url: siteUrl,
      description: siteDescription,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of California, Berkeley",
        sameAs: "https://www.berkeley.edu",
      },
      knowsAbout: [
        "Growth Engineering",
        "Startups",
        "Artificial Intelligence",
        "Computer Science",
        "Cracked Engineering"
      ],
      sameAs: [
        "https://x.com/kile_sway",
        "https://github.com/kcui5",
        "https://open.spotify.com/user/31tcd5mcobwwqvhdaxdbfsnupupe",
      ],
      email: "mailto:kyle@kylecui.dev",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kyle Cui",
      description: siteDescription,
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
}

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const meaCulpa = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mea-culpa",
})

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable, meaCulpa.variable, pressStart.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
