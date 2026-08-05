import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Three type roles. `latin-ext` is required on all of them, not optional:
// without it "Çağlar", "Anlık" and "Türkiye" fall back to a system face.

/** Display — headlines only. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Text — body copy, the quiet one. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Mono — labels and repo data. */
const jetbrains = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talha Çağlar — Security & Systems",
  description: "I work in the space between security and systems — Linux tooling, automation, and software that stays clean under real use.",
  metadataBase: new URL("https://talhacaglar.github.io"),
  openGraph: {
    title: "Talha Çağlar — Security & Systems",
    description: "I work in the space between security and systems — Linux tooling, automation, and software that stays clean under real use.",
    type: "website",
    locale: "en_US",
    siteName: "Talha Çağlar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Çağlar — Security & Systems",
    description: "I work in the space between security and systems — Linux tooling, automation, and software that stays clean under real use.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07060A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      {/* next/font self-hosts every face, so there is nothing to preconnect to. */}
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}