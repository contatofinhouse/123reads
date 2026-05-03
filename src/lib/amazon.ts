const AMAZON_AFFILIATE_TAG = "123reads0f-20";

export function getAmazonLink(title: string, author: string): string {
  const query = encodeURIComponent(`${title} ${author}`);
  return `https://www.amazon.com/s?k=${query}&tag=${AMAZON_AFFILIATE_TAG}`;
}

export function getCoverUrl(isbn?: string): string {
  if (isbn) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`;
  }
  return "";
}
