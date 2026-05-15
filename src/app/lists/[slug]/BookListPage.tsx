"use client";

import { Book } from "@/data/influencers";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import { StarRating } from "@/components/StarRating";
import { DynamicDescription } from "@/components/DynamicDescription";
import Link from "next/link";
import { BookImage } from "@/components/BookImage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { communityTrends } from "@/data/community-trends";
import { SocialBadge } from "@/components/SocialBadge";

interface Props {
  title: string;
  subtitle: string;
  books: Book[];
}

export function BookListPage({ title, subtitle, books }: Props) {
  return (
    <div className="container">
      <Header />

      <main>
        <div className="list-page-header">
          <Link href="/lists" className="back-link">&larr; All Lists</Link>
          <h2 className="list-page-title">{title}</h2>
          <p className="list-page-subtitle">{subtitle}</p>
        </div>

        <div className="results-container">
          {books.map((book, idx) => (
            <a
              key={idx}
              href={getAmazonLink(book.title, book.author)}
              target="_blank"
              rel="noopener noreferrer"
              className="recommendation-result-link"
            >
              <div className="recommendation-result">
                <div className="book-cover-container">
                  <BookImage
                    src={getCoverUrl(book.isbn)}
                    isbn={book.isbn}
                    alt={book.title}
                    author={book.author}
                    width={100}
                    height={150}
                    className="book-cover-img"
                    priority={idx < 4}
                  />
                </div>
                <div className="result-content">
                  <h3>{book.title}</h3>
                  <div className="author">by {book.author}</div>
                  <StarRating rating={book.rating} />
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    {communityTrends.find(t => t.isbn === book.isbn && t.platform === 'BookTok') && <SocialBadge platform="BookTok" />}
                    {communityTrends.find(t => t.isbn === book.isbn && t.platform === 'Reddit') && <SocialBadge platform="Reddit" />}
                  </div>
                  <DynamicDescription 
                    isbn={book.isbn} 
                    fallback={book.description || "A world-class recommendation featured on 123reads. Impartial and curated by leading minds."} 
                  />
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
