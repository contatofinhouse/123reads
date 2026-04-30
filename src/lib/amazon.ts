export function getAmazonLink(title: string, author: string): string {
  const query = encodeURIComponent(`${title} ${author}`);
  return `https://www.amazon.com/s?k=${query}`;
}

export function getCoverUrl(isbn?: string): string {
  if (isbn) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`;
  }
  return "";
}
