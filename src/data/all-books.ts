import { influencers } from "./influencers";
import { thematicLists } from "./thematic-lists";

export function getAllBooks() {
  const allBooksMap = new Map();

  // Add from influencers
  influencers.forEach(inf => {
    inf.books.forEach(book => {
      if (book.isbn) {
        if (!allBooksMap.has(book.isbn)) {
          allBooksMap.set(book.isbn, {
            isbn: book.isbn,
            title: book.title,
            author: book.author,
            category: inf.category,
            description: book.description,
            upvotes: 0,
            downvotes: 0
          });
        }
      }
    });
  });

  // Add from thematic lists
  thematicLists.forEach(list => {
    list.books.forEach(book => {
      if (book.isbn) {
        if (!allBooksMap.has(book.isbn)) {
          allBooksMap.set(book.isbn, {
            isbn: book.isbn,
            title: book.title,
            author: book.author,
            category: list.category,
            description: book.description,
            upvotes: 0,
            downvotes: 0
          });
        }
      }
    });
  });

  return Array.from(allBooksMap.values());
}
