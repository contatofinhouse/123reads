"use client";

import Link from "next/link";
import { CrossReference } from "@/data/cross-references";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import { BookImage } from "@/components/BookImage";
import { DynamicDescription } from "@/components/DynamicDescription";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface Props {
  crossRefs: CrossReference[];
}

export function InsightsPage({ crossRefs }: Props) {
  return (
    <div className="container">
      <Header />

      <main>
        <div className="list-page-header">
          <Link href="/lists" className="back-link">&larr; All Lists</Link>
          <h2 className="list-page-title">The Most Recommended Books</h2>
          <p className="list-page-subtitle">
            These books appear in multiple influencer reading lists. The more names behind a book, the stronger the signal.
          </p>
        </div>

        <div className="results-container">
          {crossRefs.map((ref, idx) => (
            <a
              key={idx}
              href={getAmazonLink(ref.title, ref.author)}
              target="_blank"
              rel="noopener noreferrer"
              className="recommendation-result-link"
            >
              <div className="recommendation-result">
                <div className="book-cover-container">
                  <BookImage
                    src={getCoverUrl(ref.isbn)}
                    isbn={ref.isbn}
                    alt={ref.title}
                    width={100}
                    height={150}
                    className="book-cover-img"
                    priority={idx < 6}
                  />
                </div>
                <div className="result-content">
                  <h3>{ref.title}</h3>
                  <div className="author">by {ref.author}</div>
                  <DynamicDescription 
                    isbn={ref.isbn} 
                    fallback={ref.description || "A world-class recommendation featured on 123reads. Impartial and curated by leading minds."} 
                  />
                  <div className="reason">
                    Recommended by <strong>{ref.count} influencers</strong>: {ref.recommendedBy.join(", ")}
                  </div>
                </div>
                <div className="amazon-btn">Buy &rarr;</div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
