"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { influencers, type Influencer } from "@/data/influencers";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import { StarRating } from "@/components/StarRating";
import { MoodIcon } from "@/components/MoodIcon";
import Link from "next/link";
import Image from "next/image";
import { InfluencerAvatar } from "@/components/InfluencerAvatar";

const AGE_FILTERS = ["Children", "Teens", "Young Adult", "Adult"];
const GENRE_FILTERS = ["Fiction", "Non-fiction", "Sci-Fi", "Fantasy", "Business", "Self-Help", "History"];

const MOOD_PROMPTS = [
  { icon: "intellectual", label: "Intellectual", prompt: "Intellectually stimulating, mind-expanding" },
  { icon: "thrilling", label: "Thrilling", prompt: "Fast-paced thriller, can't put it down" },
  { icon: "emotional", label: "Emotional", prompt: "Emotionally powerful, will make me cry" },
  { icon: "funny", label: "Funny", prompt: "Hilarious, laugh out loud comedy" },
];

const QUICK_PROMPTS = [
  "Books to read before 30",
  "Something to cry about",
  "Weekend page-turner",
  "Change my worldview",
];

const TYPEWRITER_PHRASES = [
  "Find books to master personal finance...",
  "Get recommendations for high-performance habits...",
  "Discover the best biographies for leaders...",
  "Show me the top books on artificial intelligence...",
  "Find life-changing books for entrepreneurs...",
];

interface Recommendation {
  title: string;
  author: string;
  reason: string;
  isbn?: string;
  rating?: number;
}

interface SavedBook {
  title: string;
  author: string;
  isbn?: string;
  rating?: number;
}

interface BookOfDay {
  title: string;
  author: string;
  isbn: string;
  reason: string;
}

function HomeContent() {
  const [prompt, setPrompt] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState("");
  const [bookOfDay, setBookOfDay] = useState<BookOfDay | null>(null);
  const [shelf, setShelf] = useState<SavedBook[]>([]);
  const [showShelf, setShowShelf] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeInfluencerCategory, setActiveInfluencerCategory] = useState("All");
  const INFLUENCER_CATEGORIES = ["All", "Tech", "Business", "Authors", "Science", "Culture", "Lifestyle"];
  
  const filteredInfluencers = activeInfluencerCategory === "All" 
    ? influencers 
    : influencers.filter(i => i.category === activeInfluencerCategory);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // UX Features
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (placeholderText.length < TYPEWRITER_PHRASES[phraseIndex].length) {
        timeout = setTimeout(() => {
          setPlaceholderText(TYPEWRITER_PHRASES[phraseIndex].slice(0, placeholderText.length + 1));
        }, 50); // Typing speed
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000); // Pause at end of phrase
      }
    } else {
      if (placeholderText.length > 0) {
        timeout = setTimeout(() => {
          setPlaceholderText(placeholderText.slice(0, -1));
        }, 30); // Erasing speed
      } else {
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [placeholderText, isTyping, phraseIndex]);

  useEffect(() => {
    fetch("/api/book-of-the-day")
      .then(res => res.json())
      .then(data => setBookOfDay(data))
      .catch(() => {});
    try {
      const saved = localStorage.getItem("123reads-shelf");
      if (saved) setShelf(JSON.parse(saved));
    } catch {}

    // Handle initial search from URL
    const q = searchParams.get("q");
    if (q) {
      setPrompt(q);
      handleSearch(false, q);
    }
  }, []);

  const saveToShelf = (book: SavedBook) => {
    const exists = shelf.some(b => b.title === book.title && b.author === book.author);
    if (exists) return;
    const updated = [...shelf, book];
    setShelf(updated);
    localStorage.setItem("123reads-shelf", JSON.stringify(updated));
  };

  const removeFromShelf = (title: string) => {
    const updated = shelf.filter(b => b.title !== title);
    setShelf(updated);
    localStorage.setItem("123reads-shelf", JSON.stringify(updated));
  };

  const isOnShelf = (title: string) => shelf.some(b => b.title === title);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleSearch = async (isLucky = false, overridePrompt?: string) => {
    const searchPrompt = overridePrompt ?? (isLucky ? "" : prompt);
    if (!searchPrompt.trim() && activeFilters.length === 0 && !isLucky) return;

    setLoading(true);
    setError("");
    setRecommendations([]);

    // Auto-scroll to results to improve mobile UX
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    try {
      // Update URL with search query
      if (searchPrompt.trim()) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("q", searchPrompt);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      }

      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: searchPrompt,
          filters: activeFilters,
          isLucky,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get recommendation");
      setRecommendations(data.recommendations || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMood = (moodPrompt: string) => {
    setPrompt(moodPrompt);
    handleSearch(false, moodPrompt);
  };

  const handleQuickPrompt = (qp: string) => {
    setPrompt(qp);
    handleSearch(false, qp);
  };

  const getInitials = (name: string) =>
    name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  const handleShare = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    const searchUrl = new URL(window.location.origin);
    if (prompt) {
      searchUrl.searchParams.set("q", prompt);
    }
    
    const shareText = `Check out this book recommendation for "${prompt || "books"}" on 123reads! 📚\n\n${searchUrl.toString()}`;
    
    if (navigator.share) {
      navigator.share({
        title: '123reads Recommendation',
        text: shareText,
        url: searchUrl.toString(),
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
      });
    } else {
      navigator.clipboard.writeText(shareText);
    }
    
    setCopiedId(idx);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
        <nav className="header-nav">
          <Link href="/lists">Lists</Link>
          <Link href="/insights">Insights</Link>
          <button className="shelf-toggle" onClick={() => setShowShelf(!showShelf)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
            My Shelf {shelf.length > 0 && <span className="shelf-badge">{shelf.length}</span>}
          </button>
        </nav>
      </header>

      {/* My Shelf Panel */}
      {showShelf && (
        <section className="shelf-panel">
          <div className="shelf-header">
            <h3>My Shelf</h3>
            <button className="shelf-close" onClick={() => setShowShelf(false)}>&times;</button>
          </div>
          {shelf.length === 0 ? (
            <p className="shelf-empty">No books saved yet. Click the bookmark icon on any recommendation to save it here.</p>
          ) : (
            <div className="shelf-list">
              {shelf.map((book, idx) => (
                <div key={idx} className="shelf-item">
                  <a href={getAmazonLink(book.title, book.author)} target="_blank" rel="noopener noreferrer" className="shelf-item-link">
                    <strong>{book.title}</strong>
                    <span>by {book.author}</span>
                  </a>
                  <button className="shelf-remove" onClick={() => removeFromShelf(book.title)} title="Remove">&times;</button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <main>
        {/* Hero Subtitle */}
        <section className="site-hero">
          <p className="site-subtitle">AI-Powered Book Recommendations</p>
          <h2 className="site-headline">Discover your next great read<br />from 20 world-class minds</h2>
        </section>

        {/* TOP LEVEL: AI Search Section */}
        <section className="hero">
          <div className="chat-input-wrapper" style={{ marginBottom: "0.5rem" }}>
            <div className="input-group">
              <input
                type="text"
                className="chat-input"
                placeholder={placeholderText}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                disabled={loading}
              />
            </div>
            <div className="button-group">
              <button className="primary" onClick={() => handleSearch()} disabled={loading}>
                {loading ? <div className="loading-spinner" /> : "Search"}
              </button>
              <button className="secondary" onClick={() => handleSearch(true)} disabled={loading}>
                Feeling Lucky
              </button>
            </div>
          </div>

          {recommendations.length > 0 && !loading && (
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
              <button 
                className="secondary" 
                onClick={(e) => handleShare(e, -1)}
                style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                Share these results
              </button>
            </div>
          )}

          {/* Progressive Disclosure for Filters */}
          <div style={{ marginBottom: "1.5rem" }}>
            <button 
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-secondary)",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              {showAdvancedFilters ? "▲ Hide Advanced Filters" : "⚙️ Show Advanced Filters"}
            </button>
            
            {showAdvancedFilters && (
              <div className="filters-section" style={{ marginTop: "1rem" }}>
                <div className="filter-group-title">Age Group</div>
                <div className="filters-grid">
                  {AGE_FILTERS.map(tag => (
                    <button key={tag} onClick={() => toggleFilter(tag)} className={`filter-chip ${activeFilters.includes(tag) ? "active" : ""}`}>{tag}</button>
                  ))}
                </div>
                <div className="filter-group-title">Genre</div>
                <div className="filters-grid">
                  {GENRE_FILTERS.map(tag => (
                    <button key={tag} onClick={() => toggleFilter(tag)} className={`filter-chip ${activeFilters.includes(tag) ? "active" : ""}`}>{tag}</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mood Selector */}
          <div className="mood-section">
            <div className="filter-group-title">Pick a mood</div>
            <div className="mood-grid">
              {MOOD_PROMPTS.map(mood => (
                <button key={mood.label} className="mood-chip" onClick={() => handleMood(mood.prompt)} disabled={loading}>
                  <MoodIcon type={mood.icon} />
                  <span className="mood-label">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="quick-prompts">
            {QUICK_PROMPTS.map(qp => (
              <button key={qp} className="quick-chip" onClick={() => handleQuickPrompt(qp)} disabled={loading}>{qp}</button>
            ))}
          </div>

          {/* Spacer anchor to clear sticky header */}
          <div ref={resultsRef} style={{ scrollMarginTop: "120px" }} />

          {error && <div style={{ color: "#d32f2f", marginTop: "1rem", fontWeight: 600, fontSize: "0.85rem" }}>{error}</div>}

          {/* Skeleton Loading */}
          {loading && (
            <div className="results-container">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="skeleton-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="skeleton-cover" />
                  <div className="skeleton-content">
                    <div className="skeleton-line skeleton-title" />
                    <div className="skeleton-line skeleton-author" />
                    <div className="skeleton-line skeleton-text" />
                    <div className="skeleton-line skeleton-text short" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          {!loading && recommendations.length > 0 && (
            <div className="results-container">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="result-wrapper" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <a href={getAmazonLink(rec.title, rec.author)} target="_blank" rel="noopener noreferrer" className="recommendation-result-link">
                    <div className="recommendation-result">
                      <div className="book-cover-container">
                        <Image 
                          src={getCoverUrl(rec.isbn)} 
                          alt={rec.title} 
                          width={100}
                          height={150}
                          className="book-cover-img"
                          priority={idx < 4}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector(".book-mockup")) {
                              const mockup = document.createElement("div");
                              mockup.className = "book-mockup";
                              mockup.innerHTML = `<div class="mockup-title">${rec.title}</div><div class="mockup-author">${rec.author}</div>`;
                              parent.appendChild(mockup);
                            }
                          }}
                        />
                      </div>
                      <div className="result-content">
                        <h3>{rec.title}</h3>
                        <div className="author">by {rec.author}</div>
                        <StarRating rating={rec.rating} />
                        <div className="reason">{rec.reason}</div>
                        <div className="amazon-btn">Amazon &rarr;</div>
                      </div>
                    </div>
                  </a>
                  <div className="card-actions">
                    <button
                      className="share-btn"
                      onClick={(e) => handleShare(e, idx)}
                      title="Share search results"
                    >
                      {copiedId === idx ? (
                        <span style={{ fontSize: "0.7rem", color: "var(--accent-color)" }}>Copied!</span>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                      )}
                    </button>
                    <button
                      className={`bookmark-btn ${isOnShelf(rec.title) ? "saved" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isOnShelf(rec.title)) removeFromShelf(rec.title);
                        else saveToShelf({ title: rec.title, author: rec.author, isbn: rec.isbn, rating: rec.rating });
                      }}
                      title={isOnShelf(rec.title) ? "Remove from shelf" : "Save to shelf"}
                    >
                      {isOnShelf(rec.title) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Middle Level: Book of the Day */}
        {bookOfDay && (
          <a href={getAmazonLink(bookOfDay.title, bookOfDay.author)} target="_blank" rel="noopener noreferrer" className="botd-link">
            <section className="book-of-day">
              <div className="botd-label">BOOK OF THE DAY</div>
              <div className="botd-content">
                <div className="book-cover-container">
                  <Image 
                    src={getCoverUrl(bookOfDay.isbn)} 
                    alt={bookOfDay.title} 
                    width={100}
                    height={150}
                    className="book-cover-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".book-mockup")) {
                        const mockup = document.createElement("div");
                        mockup.className = "book-mockup";
                        mockup.innerHTML = `<div class="mockup-title">${bookOfDay.title}</div><div class="mockup-author">${bookOfDay.author}</div>`;
                        parent.appendChild(mockup);
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.25rem" }}>{bookOfDay.title}</h3>
                  <div style={{ color: "#555", fontWeight: 600, marginBottom: "0.5rem" }}>by {bookOfDay.author}</div>
                  <p style={{ fontSize: "0.9rem", color: "#333" }}>{bookOfDay.reason}</p>
                </div>
              </div>
            </section>
          </a>
        )}

        {/* Bottom Level: Influencer Preview */}
        <section className="influencers-section">
          <div className="section-header-row">
            <h2 className="section-title">Curated by Brilliant Minds</h2>
            <div className="filter-dropdown-container">
              <select 
                value={activeInfluencerCategory} 
                onChange={(e) => setActiveInfluencerCategory(e.target.value)}
                className="category-select"
              >
                {INFLUENCER_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="influencer-grid">
            {filteredInfluencers.slice(0, 8).map((influencer) => (
              <Link key={influencer.slug} href={`/lists/${influencer.slug}`} className="card-link">
                <div className="influencer-card">
                  <div className="influencer-header">
                    <InfluencerAvatar 
                      name={influencer.name}
                      image={influencer.image}
                      priority={true}
                    />
                    <div>
                      <h3 className="influencer-name">{influencer.name}</h3>
                      <span className="influencer-count">{influencer.books.length} books</span>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.85rem", marginTop: "0.75rem" }}>{influencer.bio}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/lists" className="view-all-link">
              View all 20 influencers + thematic lists &rarr;
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 123reads. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/lists">All Lists</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="container"><header><h1>123<span>READS</span></h1></header><main><div className="loading-spinner" /></main></div>}>
      <HomeContent />
    </Suspense>
  );
}
