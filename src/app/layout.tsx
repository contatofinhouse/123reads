import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://123reads.app"),
  title: {
    default: "123reads | AI Book Recommendations",
    template: "%s | 123reads",
  },
  description: "Ready for your next obsession? 📚 Let AI find the perfect book for you. Curated by the world's sharpest minds. Stop searching, start reading.",
  keywords: ["book recommendations", "AI books", "reading list", "best books", "Bill Gates books", "Elon Musk books"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "123reads",
    title: "123reads | Find Your Next Favorite Book with AI",
    description: "Ready for your next obsession? 📚 Let AI find the perfect book for you. Curated by the world's sharpest minds. Stop searching, start reading.",
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
    title: "123reads | Find Your Next Favorite Book with AI",
    description: "Ready for your next obsession? 📚 Let AI find the perfect book for you. Curated by the world's sharpest minds. Stop searching, start reading.",
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
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
