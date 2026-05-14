const AMAZON_AFFILIATE_TAG = "123reads0f-20";

export function getAmazonLink(title: string, author: string): string {
  const query = encodeURIComponent(`${title} ${author}`);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_AFFILIATE_TAG}`;
}

export function getCoverUrl(isbn?: string, size: 'S' | 'M' | 'L' = 'M'): string {
  if (!isbn) return "";
  const cleanIsbn = isbn.replace(/-/g, "");
  return `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-${size}.jpg?default=false`;
}

export function getGoogleCoverUrl(isbn?: string): string {
  if (!isbn) return "";
  const cleanIsbn = isbn.replace(/-/g, "");
  // Google Books API direct cover link
  return `https://books.google.com/books/content?vid=ISBN:${cleanIsbn}&printsec=frontcover&img=1&zoom=1`;
}
