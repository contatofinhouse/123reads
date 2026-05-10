"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCoverUrl, getAmazonLink } from "@/lib/amazon";
import { BookImage } from "@/components/BookImage";
import { DynamicDescription } from "@/components/DynamicDescription";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface HuntBook {
  isbn: string;
  title: string;
  author: string;
  category: string;
  upvotes: number;
  downvotes: number;
  description?: string;
}

const CATEGORIES = ["All", "Business", "Tech", "Science", "Culture", "Lifestyle", "Authors"];

export default function HuntPage() {
  const [books, setBooks] = useState<HuntBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [votingId, setVotingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetchBooks();
  }, [activeCategory]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/hunt/list?category=${activeCategory}`);
      const data = await res.json();
      setBooks(data.books || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (book: HuntBook, type: 'up' | 'down') => {
    setVotingId(book.isbn + type);
    try {
      const res = await fetch("/api/hunt/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isbn: book.isbn,
          title: book.title,
          author: book.author,
          category: book.category,
          type,
          voter_email: "" // Honeypot field
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ text: data.error || "Failed to vote", type: 'error' });
      } else {
        // Optimistic update
        setBooks(prev => prev.map(b => 
          b.isbn === book.isbn 
            ? { ...b, [type === 'up' ? 'upvotes' : 'downvotes']: b[type === 'up' ? 'upvotes' : 'downvotes'] + 1 }
            : b
        ));
        setMessage({ text: "Vote recorded!", type: 'success' });
      }
    } catch (err) {
      setMessage({ text: "Error connecting to server", type: 'error' });
    } finally {
      setVotingId(null);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="container">
      <Header />

      <main>
        <div className="hunt-hero">
          <h2 className="hunt-title">The Community Choice</h2>
          <p className="hunt-subtitle">
            The influencers point the way, but the community decides the truth. Upvote the books that actually changed your life.
          </p>
        </div>

        <div className="hunt-filters">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {message && (
          <div className={`hunt-message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Honeypot field for bots */}
        <input 
          type="text" 
          name="voter_email" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off" 
        />

        <div className="hunt-list">
          {loading ? (
            <div className="loading-spinner-container">
              <div className="loading-spinner" />
            </div>
          ) : books.length === 0 ? (
            <div className="empty-results">
              <p>No votes yet for this category. Be the first to vote on a book from our lists!</p>
              <Link href="/lists" className="view-all-link">Go to Lists</Link>
            </div>
          ) : (
            books.map((book, idx) => (
              <div key={book.isbn} className="hunt-card">
                <div className="hunt-rank">#{idx + 1}</div>
                <div className="hunt-book-info">
                  <div className="hunt-book-cover">
                     <BookImage 
                        src={getCoverUrl(book.isbn, 'S')} 
                        alt={book.title} 
                        width={60}
                        height={90}
                        className="book-cover-img"
                      />
                  </div>
                  <div className="hunt-details">
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                    <DynamicDescription 
                      isbn={book.isbn} 
                      fallback={book.description || "A world-class recommendation featured on 123reads. Impartial and curated by leading minds."} 
                    />
                    <span className="hunt-tag">{book.category}</span>
                  </div>
                </div>
                  <div className="hunt-actions">
                    <div className="vote-controls">
                      <button 
                        className="vote-btn up" 
                        onClick={() => handleVote(book, 'up')}
                        disabled={!!votingId}
                      >
                        <span className="vote-icon">▲</span>
                        <span className="vote-count">{book.upvotes}</span>
                      </button>
                    </div>
                    <a href={getAmazonLink(book.title, book.author)} target="_blank" rel="noopener noreferrer" className="amazon-btn">
                      Buy &rarr;
                    </a>
                  </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
