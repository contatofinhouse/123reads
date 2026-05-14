import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL("https://123reads.com"),
  title: {
    default: "123reads | Impartial AI Book Recommendations (Goodreads Alternative)",
    template: "%s | 123reads",
  },
  description: "The impartial alternative to Goodreads. 📚 Use AI to find your next favorite book based on curated lists from world-class minds, not just Amazon algorithms.",
  keywords: ["book recommendations", "AI books", "reading list", "best books", "Goodreads alternative", "unbiased book reviews", "Bill Gates books", "Elon Musk books"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "123reads",
    title: "123reads | Better & Impartial Book Recommendations",
    description: "Ready for your next obsession? 📚 Like Goodreads, but impartial. AI-powered recommendations curated by the world's sharpest minds.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "123reads AI Book Recommendations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "123reads | Better & Impartial Book Recommendations",
    description: "The impartial alternative to Goodreads. 📚 AI-powered book recommendations curated by the world's sharpest minds.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://covers.openlibrary.org" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
