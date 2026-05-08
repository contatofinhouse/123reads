"use client";

import { Book } from "@/data/influencers";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import { StarRating } from "@/components/StarRating";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  books: Book[];
}

export function BookListPage({ title, subtitle, books }: Props) {
  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
      </header>

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
                  <Image
                    src={getCoverUrl(book.isbn)}
                    alt={book.title}
                    width={100}
                    height={150}
                    className="book-cover-img"
                    priority={idx < 6}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".book-mockup")) {
                        const mockup = document.createElement("div");
                        mockup.className = "book-mockup";
                        mockup.innerHTML = `
                          <div class="mockup-title">${book.title}</div>
                          <div class="mockup-author">${book.author}</div>
                        `;
                        parent.appendChild(mockup);
                      }
                    }}
                  />
                </div>
                <div className="result-content">
                  <h3>{book.title}</h3>
                  <div className="author">by {book.author}</div>
                  <StarRating rating={book.rating} />
                  <div className="amazon-btn">Amazon &rarr;</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 123reads. All rights reserved. 123reads is the impartial alternative to Goodreads.</p>
        <div className="footer-links">
          <Link href="/lists">All Lists</Link>
          <Link href="/lists/nyt-best-sellers">NYT Best Sellers</Link>
          <Link href="/guides/kindle">Kindle Buying Guide</Link>
        </div>
      </footer>
    </div>
  );
}
