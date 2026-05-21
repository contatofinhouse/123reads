"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BookImage } from "@/components/BookImage";
import { getCoverUrl } from "@/lib/amazon";
import { nytByYear, NYTBook } from "@/data/nyt-best-sellers";
import { useBookQuickView } from "@/context/BookQuickViewContext";

interface NYTYearInteractiveProps {
  year: number;
  label: string;
  fiction: NYTBook[];
  nonFiction: NYTBook[];
}

export function NYTYearInteractive({ year, label, fiction, nonFiction }: NYTYearInteractiveProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"fiction" | "nonFiction">("fiction");
  const { openQuickView } = useBookQuickView();

  // Filter books based on search term
  const filteredBooks = useMemo(() => {
    const currentList = activeTab === "fiction" ? fiction : nonFiction;
    if (!searchTerm.trim()) return currentList;

    const term = searchTerm.toLowerCase();
    return currentList.filter(
      (b) =>
        b.title.toLowerCase().includes(term) ||
        b.author.toLowerCase().includes(term)
    );
  }, [searchTerm, activeTab, fiction, nonFiction]);

  // Compute prev/next year data for rich footer navigation cards
  const currentIdx = nytByYear.findIndex((y) => y.year === year);
  const prevYearData = currentIdx < nytByYear.length - 1 ? nytByYear[currentIdx + 1] : null;
  const nextYearData = currentIdx > 0 ? nytByYear[currentIdx - 1] : null;

  return (
    <div style={{ position: "relative" }}>
      {/* 1. SEARCH BAR & TABS CONTROLLER */}
      <div className="chat-input-wrapper" style={{ marginBottom: "2.5rem", gap: "1rem" }}>
        <div className="input-group">
          <input
            type="text"
            className="chat-input"
            placeholder="🔍 Filter books by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        {/* Category Tabs in Neobrutalist design */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            className={`filter-chip ${activeTab === "fiction" ? "active" : ""}`}
            onClick={() => setActiveTab("fiction")}
            style={{
              padding: "0.8rem 1.75rem",
              borderRadius: "99px",
              boxShadow: activeTab === "fiction" ? "2px 2px 0px #121212" : "4px 4px 0px #121212",
              transform: activeTab === "fiction" ? "translate(2px, 2px)" : "none",
            }}
          >
            Fiction ({fiction.length})
          </button>
          <button
            className={`filter-chip ${activeTab === "nonFiction" ? "active" : ""}`}
            onClick={() => setActiveTab("nonFiction")}
            style={{
              padding: "0.8rem 1.75rem",
              borderRadius: "99px",
              boxShadow: activeTab === "nonFiction" ? "2px 2px 0px #121212" : "4px 4px 0px #121212",
              transform: activeTab === "nonFiction" ? "translate(2px, 2px)" : "none",
            }}
          >
            Non-fiction ({nonFiction.length})
          </button>
        </div>
      </div>

      {/* LIST SECTION */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            marginBottom: "2rem",
            borderBottom: "4px solid var(--accent-color)",
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          {activeTab === "fiction" ? "Fiction Best Sellers" : "Non-Fiction Best Sellers"} — {year}
        </h2>

        {filteredBooks.length === 0 ? (
          <div
            style={{
              padding: "3rem",
              textAlign: "center",
              border: "2px dashed var(--text-primary)",
              borderRadius: "16px",
              background: "#fafafa",
              fontWeight: 700,
              color: "var(--text-secondary)",
            }}
          >
            No books found for &quot;{searchTerm}&quot; in this category.
          </div>
        ) : (
          <div className="results-container">
            {filteredBooks.map((book, idx) => (
              <div
                key={book.isbn}
                onClick={() => openQuickView({
                  ...book,
                  isFiction: activeTab === "fiction",
                })}
                className="recommendation-result-link"
                style={{ cursor: "pointer", transition: "all 0.15s ease" }}
              >
                <div className="recommendation-result" style={{ position: "relative" }}>
                  <div
                    className="rank-badge"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "-10px",
                      background: "var(--accent-color)",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      zIndex: 10,
                      boxShadow: "2px 2px 0 black",
                      border: "2px solid var(--text-primary)",
                    }}
                  >
                    {book.rank}
                  </div>
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
                    <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.2rem", fontWeight: 800 }}>
                      {book.title}
                    </h3>
                    <div className="author" style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                      by {book.author}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {book.description || "A world-class recommendation featured on 123reads."}
                    </div>
                  </div>
                  <div
                    className="amazon-btn"
                    style={{
                      marginTop: "0",
                      alignSelf: "center",
                      padding: "0.2rem 0",
                      fontSize: "0.7rem",
                      fontWeight: 900,
                    }}
                    onClick={(e) => {
                      // Prevent trigger click on parent card
                      e.stopPropagation();
                      openQuickView({
                        ...book,
                        isFiction: activeTab === "fiction",
                      });
                    }}
                  >
                    Quick View &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. VISUAL FOOTER NAVIGATION CARDS */}
      <div
        className="footer-navigation-nyt"
        style={{
          display: "grid",
          gridTemplateColumns: prevYearData && nextYearData ? "1fr 1fr" : "1fr",
          gap: "1.5rem",
          marginTop: "6rem",
          paddingTop: "3rem",
          borderTop: "3px dashed var(--border-color)",
        }}
      >
        {/* Previous Year Visual Bento Card */}
        {prevYearData && (
          <Link href={`/lists/nyt-best-sellers/${prevYearData.year}`} className="card-link" style={{ textDecoration: "none" }}>
            <div
              className="influencer-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                justifyContent: "space-between",
                padding: "1.5rem",
                transition: "all 0.15s ease",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--accent-color)",
                    letterSpacing: "0.08em",
                  }}
                >
                  &larr; Previous Year
                </span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 900, margin: "0.2rem 0", color: "var(--text-primary)" }}>
                  Year {prevYearData.year}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                  {prevYearData.label}
                </p>
              </div>

              {/* Cover Stack preview */}
              <div style={{ display: "flex", gap: "0.25rem", margin: "0.5rem 0", flexWrap: "nowrap" }}>
                {prevYearData.fiction.slice(0, 4).map((book) => (
                  <div
                    key={book.isbn}
                    style={{
                      width: "35px",
                      height: "52px",
                      borderRadius: "2px",
                      border: "1px solid var(--text-primary)",
                      boxShadow: "1px 1px 0px #121212",
                      overflow: "hidden",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <BookImage
                      src={getCoverUrl(book.isbn, "S")}
                      isbn={book.isbn}
                      alt={book.title}
                      width={35}
                      height={52}
                      className="book-cover-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Link>
        )}

        {/* Next Year Visual Bento Card */}
        {nextYearData && (
          <Link href={`/lists/nyt-best-sellers/${nextYearData.year}`} className="card-link" style={{ textDecoration: "none" }}>
            <div
              className="influencer-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                justifyContent: "space-between",
                padding: "1.5rem",
                transition: "all 0.15s ease",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--accent-color)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Next Year &rarr;
                </span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 900, margin: "0.2rem 0", color: "var(--text-primary)" }}>
                  Year {nextYearData.year}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                  {nextYearData.label}
                </p>
              </div>

              {/* Cover Stack preview */}
              <div style={{ display: "flex", gap: "0.25rem", margin: "0.5rem 0", flexWrap: "nowrap" }}>
                {nextYearData.fiction.slice(0, 4).map((book) => (
                  <div
                    key={book.isbn}
                    style={{
                      width: "35px",
                      height: "52px",
                      borderRadius: "2px",
                      border: "1px solid var(--text-primary)",
                      boxShadow: "1px 1px 0px #121212",
                      overflow: "hidden",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <BookImage
                      src={getCoverUrl(book.isbn, "S")}
                      isbn={book.isbn}
                      alt={book.title}
                      width={35}
                      height={52}
                      className="book-cover-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
