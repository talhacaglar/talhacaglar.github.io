import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-display-face",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body-face",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-face",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talha Çağlar — Computer Engineering Student",
  description: "Computer engineering student focused on Linux, security, and desktop software.",
  metadataBase: new URL("https://talhacaglar.github.io"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Talha Çağlar", url: "https://talhacaglar.github.io" }],
  creator: "Talha Çağlar",
  keywords: [
    "Talha Çağlar",
    "computer engineering",
    "Linux",
    "Arch Linux",
    "cyber security",
    "Python",
    "open source",
  ],
  openGraph: {
    title: "Talha Çağlar — Computer Engineering Student",
    description: "Computer engineering student focused on Linux, security, and desktop software.",
    type: "website",
    locale: "en_US",
    siteName: "Talha Çağlar",
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Çağlar — Computer Engineering, Linux and Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Çağlar — Computer Engineering Student",
    description: "Computer engineering student focused on Linux, security, and desktop software.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111312",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-[100svh] flex flex-col">{children}</body>
    </html>
  );
}
