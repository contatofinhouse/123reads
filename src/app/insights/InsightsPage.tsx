"use client";

import Link from "next/link";
import { CrossReference } from "@/data/cross-references";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import Image from "next/image";

interface Props {
  crossRefs: CrossReference[];
}

export function InsightsPage({ crossRefs }: Props) {
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
                  <Image
                    src={getCoverUrl(ref.isbn)}
                    alt={ref.title}
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
                          <div class="mockup-title">${ref.title}</div>
                          <div class="mockup-author">${ref.author}</div>
                        `;
                        parent.appendChild(mockup);
                      }
                    }}
                  />
                </div>
                <div className="result-content">
                  <h3>{ref.title}</h3>
                  <div className="author">by {ref.author}</div>
                  <div className="reason">
                    Recommended by <strong>{ref.count} influencers</strong>: {ref.recommendedBy.join(", ")}
                  </div>
                  <div className="amazon-btn">Amazon &rarr;</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 123reads. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/lists">All Lists</Link>
        </div>
      </footer>
    </div>
  );
}
