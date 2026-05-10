import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { QuotesSection } from "@/components/QuotesSection";
import { Header } from "@/components/Header";

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const title = tag.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title} | 123reads Famous Quotes`,
    description: `Discover the best ${title} to inspire, motivate, and share. Curated famous quotes for every mood.`,
  };
}

export default async function FamousQuotesPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const formattedTag = tag.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // Curated fallback quotes based on common tags
  const quotesMap: Record<string, {text: string, author: string}[]> = {
    "love-quotes": [
      { text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.", author: "Victor Hugo" },
      { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
    ],
    "inspirational-quotes": [
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    ],
    "funny-quotes": [
      { text: "I am so clever that sometimes I don't understand a single word of what I am saying.", author: "Oscar Wilde" },
      { text: "People say nothing is impossible, but I do nothing every day.", author: "A.A. Milne" },
    ]
  };

  const displayQuotes = quotesMap[tag] || [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" }
  ];

  return (
    <div className="container">
      <Header />

      <main>
        <div className="list-page-header">
          <Link href="/" className="back-link">&larr; Back Home</Link>
          <h1 className="list-page-title">{formattedTag}</h1>
          <p className="list-page-subtitle">Hand-picked famous quotes to share and enjoy.</p>
        </div>

        <div className="quotes-grid" style={{ display: "grid", gap: "2rem", marginTop: "3rem" }}>
          {displayQuotes.map((q, i) => (
            <div key={i} className="quote-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="quote-content" style={{ paddingLeft: 0 }}>
                <p className="quote-text" style={{ fontSize: "1.4rem" }}>“{q.text}”</p>
                <div className="quote-meta">
                  <span className="quote-author">― {q.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "6rem" }}>
          <QuotesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
