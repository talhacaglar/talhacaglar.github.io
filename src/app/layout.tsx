import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const title = "Talha Çağlar · AI Engineer Candidate";
const description =
  "Final-year computer engineering student moving into AI engineering. Builds LLM applications around structured output, schema validation and multi-provider integration.";

export const metadata: Metadata = {
  title: { default: title, template: "%s · Talha Çağlar" },
  description,
  metadataBase: new URL("https://talhacaglar.github.io"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Talha Çağlar", url: "https://talhacaglar.github.io" }],
  creator: "Talha Çağlar",
  keywords: [
    "Talha Çağlar",
    "AI engineering",
    "LLM applications",
    "structured output",
    "Python",
    "FastAPI",
    "Pydantic",
    "open source",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Talha Çağlar",
    url: "/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="flex min-h-svh flex-col">{children}</body>
    </html>
  );
}
