import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-body-face",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Computer engineering student who has been curious about technology since childhood. Learns by building small projects and uses AI along the way.";

export const metadata: Metadata = {
  title: "Talha Çağlar — Computer Engineering Student",
  description,
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
    "web security",
    "artificial intelligence",
    "Python",
    "open source",
  ],
  openGraph: {
    title: "Talha Çağlar — Computer Engineering Student",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Talha Çağlar",
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Çağlar — Computer Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Çağlar — Computer Engineering Student",
    description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1815",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

/*
 * Scroll reveals are plain DOM work, not React state, so content never waits
 * on hydration. The head script only opts in when JS runs and motion is
 * allowed; without it every element simply renders in place.
 */
const revealOptIn = `(function(){try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.documentElement.classList.add('reveal-ready')}}catch(e){}})();`;

const revealObserver = `(function(){var root=document.documentElement;if(!root.classList.contains('reveal-ready'))return;var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-in');io.unobserve(entry.target);}});},{rootMargin:'0px 0px -12% 0px',threshold:0.01});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});setTimeout(function(){document.querySelectorAll('.reveal:not(.is-in)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight)el.classList.add('is-in');});},2500);})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script dangerouslySetInnerHTML={{ __html: revealOptIn }} />
      </head>
      <body className="min-h-[100svh] flex flex-col">
        {children}
        <script dangerouslySetInnerHTML={{ __html: revealObserver }} />
      </body>
    </html>
  );
}
