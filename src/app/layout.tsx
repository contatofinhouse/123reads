import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://123reads.com"),
  title: {
    default: "123reads | AI Book Recommendations",
    template: "%s | 123reads",
  },
  description: "Discover your next great book with AI-powered recommendations and curated lists from 20 world-class influencers.",
  keywords: ["book recommendations", "AI books", "reading list", "best books", "Bill Gates books", "Elon Musk books"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "123reads",
    title: "123reads | AI Book Recommendations",
    description: "Discover your next great book with AI-powered recommendations and curated lists from 20 world-class influencers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "123reads | AI Book Recommendations",
    description: "Discover your next great book with AI-powered recommendations and curated lists from 20 world-class influencers.",
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
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
