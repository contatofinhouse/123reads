import { nytByYear } from "@/data/nyt-best-sellers";
import { getAmazonLink } from "@/lib/amazon";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { notFound } from "next/navigation";
import { NYTYearInteractive } from "@/components/NYTYearInteractive";

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
    openGraph: {
      images: [`/api/og?title=NYT+Best+Sellers+${data.year}&subtitle=Fiction+%26+Non-fiction`],
    },
    twitter: {
      card: "summary_large_image",
      images: [`/api/og?title=NYT+Best+Sellers+${data.year}&subtitle=Fiction+%26+Non-fiction`],
    },
  };
}

export default async function NYTYearPage({ params }: PageProps) {
  const { year } = await params;
  const data = nytByYear.find((y) => String(y.year) === year);
  if (!data) notFound();

  const allBooks = [...data.fiction, ...data.nonFiction];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": `NYT Best Sellers ${data.year}`,
        "description": data.label,
        "itemListElement": allBooks.map((book, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Book",
            "name": book.title,
            "author": { "@type": "Person", "name": book.author },
            "isbn": book.isbn,
            "url": getAmazonLink(book.title, book.author),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://123reads.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Lists",
            "item": "https://123reads.com/lists"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "NYT Best Sellers",
            "item": "https://123reads.com/lists/nyt-best-sellers"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${data.year}`
          }
        ]
      }
    ]
  };

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

        <NYTYearInteractive
          year={data.year}
          label={data.label}
          fiction={data.fiction}
          nonFiction={data.nonFiction}
        />
      </main>

      <Footer />
    </div>
  );
}
