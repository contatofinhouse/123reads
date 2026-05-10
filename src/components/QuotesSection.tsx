"use client";

import { InfluencerAvatar } from "@/components/InfluencerAvatar";
import Link from "next/link";
import { useState, useEffect } from "react";

const QUOTE_TAGS = [
  "Best quotes", "Love quotes", "Inspirational quotes", 
  "Funny quotes", "Motivational quotes", "Life quotes", 
  "Friends quotes", "Positive quotes", "More quotes"
];

export function QuotesSection() {
  const [copied, setCopied] = useState(false);
  const [quote, setQuote] = useState({
    text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    author: "Victor Hugo",
    author_image: "https://unavatar.io/twitter/victorhugo"
  });

  useEffect(() => {
    fetch('/api/daily-quote')
      .then(res => res.json())
      .then(data => {
        if (data && data.text) setQuote(data);
      })
      .catch(err => console.error("Failed to fetch quote:", err));
  }, []);

  const handleShare = () => {
    const text = `“${quote.text}” ― ${quote.author}\n\nShared via 123reads`;
    if (navigator.share) {
      navigator.share({
        title: 'Book Quote',
        text: text,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(text);
      });
    } else {
      navigator.clipboard.writeText(text);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="quotes-section">
      <div className="section-header-row" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 className="section-title" style={{ justifyContent: 'center' }}>
          Daily Quotes
        </h2>
      </div>
      
      <div className="quote-card compact-quote-card">
        <div className="quote-author-image">
          <InfluencerAvatar name={quote.author} image={quote.author_image || ""} />
        </div>
        <div className="quote-content">
          <p className="quote-text">
            “{quote.text}”
          </p>
          <div className="quote-meta" style={{ justifyContent: 'center', width: '100%' }}>
            <span className="quote-author" style={{ color: 'var(--accent-color)', fontWeight: 800 }}>― {quote.author.toUpperCase()}</span>
            <button className="share-btn" onClick={handleShare} title="Share Quote" style={{ marginLeft: '1rem' }}>
              {copied ? (
                <span style={{ fontSize: "0.7rem", color: "var(--accent-color)" }}>Copied!</span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="quote-tags">
        {QUOTE_TAGS.map(tag => (
          <Link 
            key={tag} 
            href={`/famous-quotes/${tag.toLowerCase().replace(/\s+/g, "-")}`} 
            className="quote-tag"
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
}
