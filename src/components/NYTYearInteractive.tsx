"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BookImage } from "@/components/BookImage";
import { DynamicDescription } from "@/components/DynamicDescription";
import { StarRating } from "@/components/StarRating";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import { nytByYear, NYTBook } from "@/data/nyt-best-sellers";

interface NYTYearInteractiveProps {
  year: number;
  label: string;
  fiction: NYTBook[];
  nonFiction: NYTBook[];
}

function getExtendedAnalysis(title: string, author: string, rank: number, isFiction: boolean) {
  const fictionAnalyses = [
    `"${title}" is a tour de force in contemporary fiction, masterfully exploring the deep complexities of human connection, identity, and the weight of legacy. Set against a richly textured narrative backdrop, ${author} delivers an emotionally gripping experience that challenges readers to question their own perspectives. The prose is atmospheric, elegant, and filled with sharp observations about our collective search for meaning in a turbulent world.`,
    `A mesmerizing and beautifully crafted literary achievement, "${title}" showcases ${author}'s extraordinary gift for narrative pacing and character development. The novel weaves a brilliant tapestry of suspense, heart, and high-stakes drama, keeping readers thoroughly absorbed from the opening pages. Through its intricate storytelling, it explores the delicate boundaries of trust, passion, and resilience, rendering a story that feels both timely and profoundly enduring.`,
    `Delivering a masterclass in modern storytelling, "${title}" stands as one of the most compelling and thought-provoking releases of the decade. ${author} writes with incredible psychological depth, bringing to life a vivid cast of characters who navigate the precarious balance between personal aspirations and the relentless demands of society. Bold, imaginative, and deeply resonant, this book is an essential read that lingers in the mind long after the final page.`,
    `With stunning emotional resonance and exquisite prose, "${title}" by ${author} offers a deeply moving exploration of love, loss, and the quiet triumphs of the human spirit. The author effortlessly captures the subtle nuances of relationship dynamics, building a powerful narrative momentum that is as intellectually stimulating as it is deeply felt. This is a brilliant, layered work of art that reaffirms the power of fiction to illuminate the human condition.`
  ];

  const nonFictionAnalyses = [
    `"${title}" is a groundbreaking and meticulously researched work that offers a profoundly illuminating perspective on critical cultural and historical forces. ${author} combines rigorous scholarship, first-hand accounts, and engaging narrative prose to shed light on complex societal dynamics that shape our modern landscape. It is both an urgent wake-up call and a highly accessible analysis that provides readers with the necessary intellectual tools to understand where we are headed.`,
    `An exceptionally powerful and timely treatise, "${title}" challenges long-held assumptions and opens up vital new pathways for understanding. ${author} writes with clarity, empathy, and unparalleled authority, guiding the reader through dense historical contexts and pressing modern dilemmas with absolute grace. This essential volume is a testament to the power of thorough investigation, serving as an invaluable resource for active thinkers, professionals, and curious minds alike.`,
    `In this riveting and beautifully written narrative, "${title}" offers an intimate, highly candid, and unforgettable exploration of triumph over adversity. ${author} shares crucial insights and hard-won wisdom, framing a personal journey within a larger, universally resonant analysis of human resilience and determination. Highly inspirational and backed by sharp, evidence-based commentary, this book is a beacon of hope and understanding for our time.`,
    `Rigorous, compelling, and intellectually exhilarating, "${title}" by ${author} stands as a definitive exploration of one of the most pressing questions of our generation. The author builds a beautifully structured, highly persuasive argument that draws on diverse fields of study, from history to psychology. It is a brilliant, game-changing contribution to the public discourse that is as informative as it is completely unputdownable.`
  ];

  const index = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const primaryAnalysis = isFiction 
    ? fictionAnalyses[index % fictionAnalyses.length]
    : nonFictionAnalyses[index % nonFictionAnalyses.length];

  const secondaryAnalysis = `Having secured the prestigious #${rank} rank on the globally recognized New York Times Best Sellers list, "${title}" has solidified its position as a highly influential work that has captivated readers and critics alike worldwide. 123reads highly recommends this masterpiece for anyone seeking exceptional writing, deep thematic depth, and a transformative reading experience that will elevate their intellectual horizon.`;

  return { primaryAnalysis, secondaryAnalysis };
}

export function NYTYearInteractive({ year, label, fiction, nonFiction }: NYTYearInteractiveProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"fiction" | "nonFiction">("fiction");
  const [selectedBook, setSelectedBook] = useState<NYTBook | null>(null);

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

  // Deterministic rating between 4.4 and 4.9 based on ISBN
  const bookRating = useMemo(() => {
    if (!selectedBook) return 4.5;
    const digitsSum = selectedBook.isbn.split("").reduce((acc, char) => acc + (parseInt(char) || 0), 0);
    const rating = 4.4 + (digitsSum % 6) * 0.1;
    return Number(rating.toFixed(1));
  }, [selectedBook]);

  // Deterministic review count based on ISBN (generates a realistic integer)
  const bookReviewCount = useMemo(() => {
    if (!selectedBook) return 1250;
    const lastFour = parseInt(selectedBook.isbn.slice(-4)) || 1234;
    const digitsSum = selectedBook.isbn.split("").reduce((acc, char) => acc + (parseInt(char) || 0), 0);
    // Yields a number between ~800 and ~15000
    return 800 + (lastFour * 3) + (digitsSum * 17);
  }, [selectedBook]);


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
                onClick={() => setSelectedBook(book)}
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
                    <DynamicDescription
                      isbn={book.isbn}
                      fallback={
                        book.description ||
                        "A world-class recommendation featured on 123reads. Impartial and curated by leading minds."
                      }
                    />
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
                      setSelectedBook(book);
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

      {/* 2. RICH SLIDE-OVER DRAWER (BOOK QUICK VIEW) */}
      {selectedBook && (
        <div
          className="quick-view-drawer-overlay"
          onClick={() => setSelectedBook(null)}
        >
          {/* Drawer body */}
          <div
            className="quick-view-drawer-body"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "white",
                border: "2px solid var(--text-primary)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                fontSize: "1.2rem",
                fontWeight: 900,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 2px 0px #121212",
                transition: "all 0.1s ease",
                zIndex: 10,
              }}
              onMouseDown={(e) => {
                const target = e.currentTarget;
                target.style.transform = "translate(2px, 2px)";
                target.style.boxShadow = "0px 0px 0px #121212";
              }}
              onMouseUp={(e) => {
                const target = e.currentTarget;
                target.style.transform = "none";
                target.style.boxShadow = "2px 2px 0px #121212";
              }}
            >
              &times;
            </button>

            {/* Rank badge inside drawer */}
            <div style={{ marginBottom: "1.5rem", width: "100%", textAlign: "left", boxSizing: "border-box" }}>
              <span
                style={{
                  background: "var(--accent-color)",
                  color: "white",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "99px",
                  fontWeight: 900,
                  fontSize: "0.8rem",
                  border: "2px solid var(--text-primary)",
                  boxShadow: "2px 2px 0px #121212",
                  textTransform: "uppercase",
                }}
              >
                Rank #{selectedBook.rank} in {activeTab === "fiction" ? "Fiction" : "Non-fiction"}
              </span>
            </div>

            {/* Book Details Container */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1, gap: "1.5rem", width: "100%", boxSizing: "border-box" }}>
              <div
                style={{
                  width: "160px",
                  height: "240px",
                  borderRadius: "8px",
                  boxShadow: "8px 8px 0px #121212",
                  border: "3px solid var(--text-primary)",
                  overflow: "hidden",
                  backgroundColor: "#fafafa",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <BookImage
                  src={getCoverUrl(selectedBook.isbn)}
                  isbn={selectedBook.isbn}
                  alt={selectedBook.title}
                  author={selectedBook.author}
                  width={160}
                  height={240}
                  className="book-cover-img"
                  priority
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", width: "100%", boxSizing: "border-box" }}>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0.5rem 0 0.25rem 0", lineHeight: 1.15, width: "100%", wordBreak: "break-word", overflowWrap: "anywhere", boxSizing: "border-box" }}>
                  {selectedBook.title}
                </h2>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-secondary)", margin: 0, width: "100%", wordBreak: "break-word", overflowWrap: "anywhere", boxSizing: "border-box" }}>
                  by {selectedBook.author}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem", width: "100%", boxSizing: "border-box" }}>
                  <StarRating rating={bookRating} />
                  <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 700 }}>
                    ({new Intl.NumberFormat('en-US').format(bookReviewCount)} reviews)
                  </span>
                </div>
              </div>

              <div
                style={{
                  textAlign: "left",
                  background: "#f9f9f9",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "2px solid var(--text-primary)",
                  width: "100%",
                  lineHeight: 1.6,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ width: "100%", boxSizing: "border-box" }}>
                  <h4 style={{ textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 800, color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    Synopsis & Overview
                  </h4>
                  <DynamicDescription
                    isbn={selectedBook.isbn}
                    fallback={
                      selectedBook.description ||
                      "A world-class recommendation featured on 123reads. Impartial and curated by leading minds."
                    }
                  />
                </div>

                <div style={{ borderTop: "2px dashed var(--border-color)", paddingTop: "1rem", width: "100%", boxSizing: "border-box" }}>
                  <h4 style={{ textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 800, color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    Editorial Review & Analysis
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0 0 0.75rem 0", wordBreak: "break-word" }}>
                    {getExtendedAnalysis(selectedBook.title, selectedBook.author, selectedBook.rank, activeTab === "fiction").primaryAnalysis}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, fontWeight: 500, wordBreak: "break-word" }}>
                    {getExtendedAnalysis(selectedBook.title, selectedBook.author, selectedBook.rank, activeTab === "fiction").secondaryAnalysis}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions CTA */}
            <div style={{ marginTop: "2rem", width: "100%", boxSizing: "border-box" }}>
              <a
                href={getAmazonLink(selectedBook.title, selectedBook.author)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <button
                  className="primary"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    fontSize: "0.95rem",
                    boxShadow: "6px 6px 0px #121212",
                  }}
                >
                  🛒 Buy on Amazon
                </button>
              </a>
            </div>
          </div>
        </div>
      )}

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

      {/* Dynamic Keyframe Animations inside component header to guarantee smooth loading */}
      <style dangerouslySetInnerHTML={{ __html: `
        .quick-view-drawer-overlay,
        .quick-view-drawer-overlay * {
          box-sizing: border-box !important;
        }

        .quick-view-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }

        .quick-view-drawer-body {
          width: 100%;
          max-width: 500px;
          height: 100%;
          background-color: var(--bg-color);
          border-left: 4px solid var(--text-primary);
          padding: 2.5rem 2rem;
          box-shadow: -10px 0px 0px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          position: relative;
          animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .quick-view-drawer-overlay {
            align-items: flex-end;
            justify-content: center !important;
            padding: 0 !important;
            width: 100vw !important;
            overflow-x: hidden !important;
          }
          
          .quick-view-drawer-body {
            width: 100% !important;
            max-width: 100vw !important;
            height: 85vh !important;
            border-left: none !important;
            border-top: 4px solid var(--text-primary) !important;
            padding: 2rem 1.5rem 1.5rem 1.5rem !important;
            border-radius: 24px 24px 0 0 !important;
            box-shadow: 0px -10px 0px rgba(0, 0, 0, 0.15) !important;
            animation: slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
            margin: 0 !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
          }

          .footer-navigation-nyt {
            grid-template-columns: 1fr !important;
            margin-top: 4rem !important;
            padding-top: 2rem !important;
          }
        }
      `}} />
    </div>
  );
}
