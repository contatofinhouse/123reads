export interface NYTBook {
  title: string;
  author: string;
  isbn: string;
  rank: number;
  description?: string;
}

export interface NYTYearData {
  year: number;
  label: string;
  fiction: NYTBook[];
  nonFiction: NYTBook[];
}

export const nytByYear: NYTYearData[] = [
  {
    year: 2026,
    label: "May 2026 — Current Best Sellers",
    fiction: [
      { rank: 1, title: "Hope Rises", author: "David Baldacci", isbn: "9781538750438" },
      { rank: 2, title: "The Correspondent", author: "Virginia Evans", isbn: "9780593441275" },
      { rank: 3, title: "Yesteryear", author: "Caro Claire Burke", isbn: "9781538740125" },
      { rank: 4, title: "Rites of the Starling", author: "Devney Perry", isbn: "9781951590215" },
      { rank: 5, title: "Starside", author: "Alex Aster", isbn: "9781419760884" },
      { rank: 6, title: "The Auction", author: "Sadie Kincaid", isbn: "9781952451000" },
      { rank: 7, title: "The Faith of Beasts", author: "James S.A. Corey", isbn: "9780316535458" },
      { rank: 8, title: "Judge Stone", author: "Viola Davis and James Patterson", isbn: "9780316497541" },
      { rank: 9, title: "Go Gentle", author: "Maria Semple", isbn: "9780316432121" },
      { rank: 10, title: "The Night We Met", author: "Abby Jimenez", isbn: "9781538704431" },
    ],
    nonFiction: [
      { rank: 1, title: "When We See You Again", author: "Rachel Goldberg-Polin", isbn: "9780593651111" },
      { rank: 2, title: "Strangers", author: "Belle Burden", isbn: "9780593652222" },
      { rank: 3, title: "Famesick", author: "Lena Dunham", isbn: "9780593653333" },
      { rank: 4, title: "London Falling", author: "Patrick Radden Keefe", isbn: "9780385549000" },
      { rank: 5, title: "The Future Is Peace", author: "Aziz Abu Sarah and Maoz Inon", isbn: "9780593654444" },
      { rank: 6, title: "The Anxious Generation", author: "Jonathan Haidt", isbn: "9780593655444" },
      { rank: 7, title: "This Vast Enterprise", author: "Craig Fehrman", isbn: "9781982111111" },
      { rank: 8, title: "You with the Sad Eyes", author: "Christina Applegate", isbn: "9781984812345" },
      { rank: 9, title: "For the Love of the Grind", author: "Sara Hall", isbn: "9780593656666" },
      { rank: 10, title: "Stripped Down", author: "Bunnie Xo", isbn: "9780593657777" },
    ],
  },
  {
    year: 2025,
    label: "2025 — NYT 10 Best Books of the Year",
    fiction: [
      { rank: 1, title: "Angel Down", author: "Daniel Kraus", isbn: "9781613123898" },
      { rank: 2, title: "The Director", author: "Daniel Kehlmann", isbn: "9781524749217" },
      { rank: 3, title: "The Loneliness of Sonia and Sunny", author: "Kiran Desai", isbn: "9780802162540" },
      { rank: 4, title: "The Sisters", author: "Jonas Hassen Khemiri", isbn: "9781524749224" },
      { rank: 5, title: "Stone Yard Devotional", author: "Charlotte Wood", isbn: "9781643755359" },
    ],
    nonFiction: [
      { rank: 1, title: "A Marriage at Sea", author: "Sophie Elmhirst", isbn: "9780063236059" },
      { rank: 2, title: "Mother Emanuel", author: "Kevin Sack", isbn: "9781984879233" },
      { rank: 3, title: "Mother Mary Comes to Me", author: "Arundhati Roy", isbn: "9781984879240" },
      { rank: 4, title: "There Is No Place for Us", author: "Brian Goldstone", isbn: "9781610398640" },
      { rank: 5, title: "Wild Thing: A Life of Paul Gauguin", author: "Sue Prideaux", isbn: "9780300244038" },
    ],
  },
  {
    year: 2024,
    label: "2024 — NYT 10 Best Books of the Year",
    fiction: [
      { rank: 1, title: "All Fours", author: "Miranda July", isbn: "9780593492741" },
      { rank: 2, title: "Good Material", author: "Dolly Alderton", isbn: "9780593536483" },
      { rank: 3, title: "James", author: "Percival Everett", isbn: "9780385550369" },
      { rank: 4, title: "Martyr!", author: "Kaveh Akbar", isbn: "9780593537619" },
      { rank: 5, title: "You Dreamed of Empires", author: "Álvaro Enrigue", isbn: "9780593653135" },
    ],
    nonFiction: [
      { rank: 1, title: "Everyone Who Is Gone Is Here", author: "Jonathan Blitzer", isbn: "9781984801128" },
      { rank: 2, title: "I Heard Her Call My Name", author: "Lucy Sante", isbn: "9781984880000" },
      { rank: 3, title: "Reagan: His Life and Legend", author: "Max Boot", isbn: "9781631494697" },
      { rank: 4, title: "The Wide Wide Sea", author: "Hampton Sides", isbn: "9780385544764" },
      { rank: 5, title: "Cold Crematorium", author: "József Debreczeni", isbn: "9781250284488" },
    ],
  },
];

// Helper exports for backward compatibility
export const nytFiction = nytByYear[0].fiction;
export const nytNonFiction = nytByYear[0].nonFiction;
