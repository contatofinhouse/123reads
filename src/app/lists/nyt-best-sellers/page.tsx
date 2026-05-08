import { nytByYear } from "@/data/nyt-best-sellers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New York Times Best Sellers — All Years | 123reads",
  description:
    "Browse every NYT Best Sellers list by year: 2024, 2025, 2026. Fiction & Non-fiction rankings curated by 123reads, the impartial Goodreads alternative.",
  alternates: { canonical: "/lists/nyt-best-sellers" },
};

export default function NYTIndexPage() {
  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
      </header>

      <main>
        <div
          className="list-page-header"
          style={{ textAlign: "center", marginBottom: "4rem" }}
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

        {/* Year cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {nytByYear.map((y) => (
            <Link
              key={y.year}
              href={`/lists/nyt-best-sellers/${y.year}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "2px solid var(--text-primary)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  background: "white",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                className="year-card"
              >
                <span
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {y.year}
                </span>
                <p style={{ color: "#555", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  {y.label}
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: "var(--accent-color)",
                      color: "white",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "99px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    {y.fiction.length} Fiction
                  </span>
                  <span
                    style={{
                      background: "var(--text-primary)",
                      color: "white",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "99px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    {y.nonFiction.length} Non-fiction
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section
          className="seo-content"
          style={{
            padding: "3rem",
            background: "#f9f9f9",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>Why Track NYT Best Sellers?</h2>
          <p style={{ lineHeight: "1.7", color: "#333", marginBottom: "1rem" }}>
            The New York Times Best Seller list remains the industry gold standard.
            While other platforms use opaque algorithms, the NYT list is based on
            actual sales data across a wide range of independent and chain bookstores.
          </p>
          <p style={{ lineHeight: "1.7", color: "#333" }}>
            At 123reads, we maintain these archives to help you discover books that
            have stood the test of time, not just what&apos;s trending this week.
            It&apos;s part of our commitment to being the most{" "}
            <strong>impartial and comprehensive Goodreads alternative</strong>.
          </p>
        </section>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} 123reads. All rights reserved. 123reads
          is the impartial alternative to Goodreads.
        </p>
        <div className="footer-links">
          <Link href="/lists">All Lists</Link>
          <Link href="/guides/kindle">Kindle Guide</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        </div>
      </footer>
    </div>
  );
}
