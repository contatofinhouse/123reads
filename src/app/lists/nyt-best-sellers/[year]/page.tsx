import { nytByYear } from "@/data/nyt-best-sellers";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import type { Metadata } from "next";
import Link from "next/link";
import { BookImage } from "@/components/BookImage";
import { DynamicDescription } from "@/components/DynamicDescription";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return nytByYear.map((y) => ({ year: String(y.year) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  const data = nytByYear.find((y) => String(y.year) === year);
  if (!data) return {};

  return {
    title: `NYT Best Sellers ${data.year} — Fiction & Non-fiction | 123reads`,
    description: `Browse the ${data.year} New York Times Best Sellers list. ${data.fiction.length} fiction and ${data.nonFiction.length} non-fiction picks curated by 123reads.`,
    alternates: { canonical: `/lists/nyt-best-sellers/${data.year}` },
  };
}

export default async function NYTYearPage({ params }: PageProps) {
  const { year } = await params;
  const data = nytByYear.find((y) => String(y.year) === year);
  if (!data) notFound();

  const allBooks = [...data.fiction, ...data.nonFiction];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `NYT Best Sellers ${data.year}`,
    description: data.label,
    itemListElement: allBooks.map((book, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: { "@type": "Person", name: book.author },
        isbn: book.isbn,
        url: getAmazonLink(book.title, book.author),
      },
    })),
  };

  const renderSection = (title: string, books: typeof data.fiction) => (
    <section style={{ marginBottom: "4rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "2rem",
          borderBottom: "4px solid var(--accent-color)",
          display: "inline-block",
        }}
      >
        {title}
      </h2>
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
                  }}
                >
                  {book.rank}
                </div>
                <BookImage
                  src={getCoverUrl(book.isbn)}
                  isbn={book.isbn}
                  alt={book.title}
                  width={100}
                  height={150}
                  className="book-cover-img"
                  priority={idx < 4}
                />
              </div>
              <div className="result-content">
                <h3>{book.title}</h3>
                <div className="author">by {book.author}</div>
                <DynamicDescription 
                  isbn={book.isbn} 
                  fallback={book.description || "A world-class recommendation featured on 123reads. Impartial and curated by leading minds."} 
                />
              </div>
              <div className="amazon-btn" style={{ marginTop: "0" }}>
                Buy &rarr;
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );

  // Build prev/next year navigation
  const years = nytByYear.map((y) => y.year);
  const currentIdx = years.indexOf(data.year);
  const prevYear = currentIdx < years.length - 1 ? years[currentIdx + 1] : null;
  const nextYear = currentIdx > 0 ? years[currentIdx - 1] : null;

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        <div
          className="list-page-header"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <Link
            href="/lists/nyt-best-sellers"
            className="back-link"
            style={{ marginBottom: "1rem", display: "inline-block" }}
          >
            &larr; All NYT Years
          </Link>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              marginBottom: "0.5rem",
            }}
          >
            NYT Best Sellers{" "}
            <span style={{ color: "var(--accent-color)" }}>{data.year}</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto 2rem",
            }}
          >
            {data.label}
          </p>

          {/* Year navigation pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            {nytByYear.map((y) => (
              <Link
                key={y.year}
                href={`/lists/nyt-best-sellers/${y.year}`}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "99px",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  border: "2px solid var(--text-primary)",
                  background:
                    y.year === data.year ? "var(--text-primary)" : "white",
                  color: y.year === data.year ? "white" : "var(--text-primary)",
                  transition: "all 0.2s",
                }}
              >
                {y.year}
              </Link>
            ))}
          </div>
        </div>

        {renderSection(`Fiction — ${data.year}`, data.fiction)}
        {renderSection(`Non-fiction — ${data.year}`, data.nonFiction)}

        {/* Prev / Next navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "2px dashed var(--border-color)",
          }}
        >
          {prevYear ? (
            <Link
              href={`/lists/nyt-best-sellers/${prevYear}`}
              style={{
                fontWeight: 800,
                textDecoration: "none",
                color: "var(--text-primary)",
              }}
            >
              &larr; {prevYear}
            </Link>
          ) : (
            <span />
          )}
          {nextYear ? (
            <Link
              href={`/lists/nyt-best-sellers/${nextYear}`}
              style={{
                fontWeight: 800,
                textDecoration: "none",
                color: "var(--text-primary)",
              }}
            >
              {nextYear} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
