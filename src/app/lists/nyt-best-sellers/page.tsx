import { nytByYear } from "@/data/nyt-best-sellers";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BookImage } from "@/components/BookImage";
import { BookCarousel } from "@/components/BookCarousel";
import { getCoverUrl } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "New York Times Best Sellers — All Years | 123reads",
  description:
    "Browse every NYT Best Sellers list by year: 2024, 2025, 2026. Fiction & Non-fiction rankings curated by 123reads, the impartial Goodreads alternative.",
  alternates: { canonical: "/lists/nyt-best-sellers" },
};

export default function NYTIndexPage() {
  const latestYear = nytByYear[0];

  return (
    <div className="container">
      <Header />

      <main>
        <div
          className="list-page-header"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Link
            href="/lists"
            className="back-link"
            style={{ marginBottom: "1rem", display: "inline-block" }}
          >
            &larr; All Lists
          </Link>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "1rem" }}>
            NYT Best Sellers
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            The official rankings and annual selections from the New York Times.
            Browse by year to explore Fiction &amp; Non-fiction lists.
          </p>
        </div>

        {/* Year cards with cover stacks */}
        <div className="nyt-year-grid">
          {nytByYear.map((y) => (
            <Link
              key={y.year}
              href={`/lists/nyt-best-sellers/${y.year}`}
              className="nyt-year-card"
            >
              <span className="nyt-year-number">{y.year}</span>
              <p className="nyt-year-label">{y.label}</p>

              {/* Cover stack — first 5 fiction books */}
              <div className="nyt-cover-stack">
                {y.fiction.slice(0, 5).map((book, idx) => (
                  <div key={book.isbn} className="nyt-cover-stack-item">
                    <BookImage
                      src={getCoverUrl(book.isbn, "S")}
                      isbn={book.isbn}
                      alt={book.title}
                      width={55}
                      height={82}
                      className="book-cover-img"
                      priority={idx < 3}
                    />
                  </div>
                ))}
              </div>

              <div className="nyt-badges">
                <span className="nyt-badge nyt-badge-fiction">
                  {y.fiction.length} Fiction
                </span>
                <span className="nyt-badge nyt-badge-nonfiction">
                  {y.nonFiction.length} Non-fiction
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Highlights carousel for the latest year */}
        <BookCarousel
          title={`${latestYear.year} Highlights`}
          books={[...latestYear.fiction, ...latestYear.nonFiction].slice(0, 12).map(b => ({
            title: b.title,
            author: b.author,
            isbn: b.isbn,
          }))}
          linkTo={`/lists/nyt-best-sellers/${latestYear.year}`}
          linkLabel={`See full ${latestYear.year} list`}
        />

        <section
          className="seo-content"
          style={{
            padding: "3rem",
            background: "#f9f9f9",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
            marginTop: "2rem",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>Why Track NYT Best Sellers?</h2>
          <p style={{ lineHeight: "1.7", color: "#333", marginBottom: "1rem" }}>
            The New York Times Best Seller list remains the industry gold standard.
            While other platforms use opaque algorithms, the NYT list is based on
            actual sales data across a wide range of independent and chain bookstores.
          </p>
          <p style={{ lineHeight: "1.7", color: "#333", marginBottom: "1rem" }}>
            At 123reads, we maintain these archives to help you discover books that
            have stood the test of time, not just what&apos;s trending this week.
            It&apos;s part of our commitment to being the most{" "}
            <strong>impartial and comprehensive Goodreads alternative</strong>.
          </p>
          <p style={{ lineHeight: "1.7", color: "#333" }}>
            Whether you&apos;re looking for the{" "}
            <strong>NYT best sellers 2026 fiction list</strong>, the{" "}
            <strong>New York Times best books of 2025</strong>, or exploring{" "}
            <strong>NYT bestseller non-fiction 2024 picks</strong>, you&apos;ll find
            every curated list right here — organized by year with full rankings and
            descriptions.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
