"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2 className="footer-logo">123<span>READS</span></h2>
          <p className="footer-tagline">The impartial alternative to Goodreads. AI-powered recommendations curated by the world's sharpest minds.</p>
        </div>
        
        <div className="footer-links-group">
          <h4>Discover</h4>
          <Link href="/lists">All Book Lists</Link>
          <Link href="/hunt">Community Hunt</Link>
          <Link href="/lists/nyt-best-sellers">NYT Best Sellers</Link>
        </div>

        <div className="footer-links-group">
          <h4>Resources</h4>
          <Link href="/guides/kindle">Kindle Buying Guide</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/guides/kindle">Best E-Readers 2026</Link>
        </div>

        <div className="footer-links-group">
          <h4>Popular Themes</h4>
          <Link href="/lists?q=productivity">Productivity</Link>
          <Link href="/lists?q=biographies">Biographies</Link>
          <Link href="/lists?q=sci-fi">Sci-Fi Classics</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 123reads. Signal over noise. All rights reserved.</p>
      </div>
    </footer>
  );
}
