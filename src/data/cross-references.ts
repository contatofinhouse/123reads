import { influencers } from "./influencers";

export interface CrossReference {
  title: string;
  author: string;
  isbn?: string;
  recommendedBy: string[];
  count: number;
}

export function computeCrossReferences(): CrossReference[] {
  const bookMap = new Map<string, CrossReference>();

  for (const influencer of influencers) {
    for (const book of influencer.books) {
      const key = `${book.title}::${book.author}`.toLowerCase();
      if (bookMap.has(key)) {
        const existing = bookMap.get(key)!;
        existing.recommendedBy.push(influencer.name);
        existing.count++;
      } else {
        bookMap.set(key, {
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          recommendedBy: [influencer.name],
          count: 1,
        });
      }
    }
  }

  return Array.from(bookMap.values())
    .filter(b => b.count >= 2)
    .sort((a, b) => b.count - a.count);
}
