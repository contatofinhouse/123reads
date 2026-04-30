import { influencers } from "@/data/influencers";
import { thematicLists } from "@/data/thematic-lists";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAmazonLink, getCoverUrl } from "@/lib/amazon";
import { BookListPage } from "./BookListPage";

// Combine all slugs for static generation
const allItems = [
  ...influencers.map(i => ({ type: "influencer" as const, slug: i.slug, data: i })),
  ...thematicLists.map(t => ({ type: "thematic" as const, slug: t.slug, data: t })),
];

export async function generateStaticParams() {
  return allItems.map(item => ({ slug: item.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const item = allItems.find(i => i.slug === slug);
  if (!item) return { title: "Not Found" };

  const isInfluencer = item.type === "influencer";
  const title = isInfluencer
    ? `${(item.data as typeof influencers[0]).name}'s Book Recommendations`
    : (item.data as typeof thematicLists[0]).title;
  const description = isInfluencer
    ? (item.data as typeof influencers[0]).bio
    : (item.data as typeof thematicLists[0]).description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function ListPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = allItems.find(i => i.slug === slug);
  if (!item) notFound();

  const isInfluencer = item.type === "influencer";
  const influencer = isInfluencer ? (item.data as typeof influencers[0]) : null;
  const thematic = !isInfluencer ? (item.data as typeof thematicLists[0]) : null;

  const title = influencer ? `${influencer.name}'s Picks` : thematic!.title;
  const subtitle = influencer ? influencer.bio : thematic!.description;
  const books = influencer ? influencer.books : thematic!.books;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description: subtitle,
    numberOfItems: books.length,
    itemListElement: books.map((book, idx) => ({
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookListPage
        title={title}
        subtitle={subtitle}
        books={books}
      />
    </>
  );
}
