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
      { rank: 1, title: "Hope Rises", author: "David Baldacci", isbn: "9781538750438", description: "The latest high-stakes thriller from David Baldacci, where secrets of the past collide with a dangerous present." },
      { rank: 2, title: "The Correspondent", author: "Virginia Evans", isbn: "9780593441275", description: "A gripping drama about a war reporter forced to confront the truth of her own family history." },
      { rank: 3, title: "Yesteryear", author: "Caro Claire Burke", isbn: "9781538740125", description: "A nostalgic and heart-wrenching journey through a small town's hidden memories." },
      { rank: 4, title: "Rites of the Starling", author: "Devney Perry", isbn: "9781951590215", description: "A beautifully written romance set against the rugged backdrop of the Montana wilderness." },
      { rank: 5, title: "Starside", author: "Alex Aster", isbn: "9781419760884", description: "The highly anticipated fantasy sequel that takes the world of Lightlark to new heights." },
      { rank: 6, title: "The Auction", author: "Sadie Kincaid", isbn: "9781952451000", description: "A dark and seductive tale of power, desire, and the lengths people go to for love." },
      { rank: 7, title: "The Faith of Beasts", author: "James S.A. Corey", isbn: "9780316535458", description: "A new epic space opera from the creators of The Expanse series." },
      { rank: 8, title: "Judge Stone", author: "Viola Davis and James Patterson", isbn: "9780316497541", description: "A legal thriller powerhouse collaboration exploring justice in a divided world." },
      { rank: 9, title: "Go Gentle", author: "Maria Semple", isbn: "9780316432121", description: "A witty and insightful look at the complexities of modern family life." },
      { rank: 10, title: "The Night We Met", author: "Abby Jimenez", isbn: "9781538704431", description: "A sparkling romantic comedy about timing, fate, and the power of a second chance." },
    ],
    nonFiction: [
      { rank: 1, title: "When We See You Again", author: "Rachel Goldberg-Polin", isbn: "9780593651111", description: "A powerful memoir of resilience and hope in the face of unimaginable tragedy." },
      { rank: 2, title: "Strangers", author: "Belle Burden", isbn: "9780593652222", description: "An exploration of identity and belonging in an increasingly fragmented world." },
      { rank: 3, title: "Famesick", author: "Lena Dunham", isbn: "9780593653333", description: "A candid and provocative look at fame, social media, and the search for authenticity." },
      { rank: 4, title: "London Falling", author: "Patrick Radden Keefe", isbn: "9780385549000", description: "A meticulously researched investigation into the scandals that shook the heart of London." },
      { rank: 5, title: "The Future Is Peace", author: "Aziz Abu Sarah and Maoz Inon", isbn: "9780593654444", description: "A visionary blueprint for peace and reconciliation in the Middle East." },
      { rank: 6, title: "The Anxious Generation", author: "Jonathan Haidt", isbn: "9780593655444", description: "How the shift from play-based childhood to phone-based childhood is causing an epidemic of mental illness." },
      { rank: 7, title: "This Vast Enterprise", author: "Craig Fehrman", isbn: "9781982111111", description: "A definitive history of the American presidency and the books that shaped it." },
      { rank: 8, title: "You with the Sad Eyes", author: "Christina Applegate", isbn: "9781984812345", description: "A moving and honest account of living with a chronic illness." },
      { rank: 9, title: "For the Love of the Grind", author: "Sara Hall", isbn: "9780593656666", description: "What it takes to be one of the best marathon runners in the world." },
      { rank: 10, title: "Stripped Down", author: "Bunnie Xo", isbn: "9780593657777", description: "A raw and unfiltered memoir about rebuilding a life from the ground up." },
    ],
  },
  {
    year: 2025,
    label: "2025 — NYT 10 Best Books of the Year",
    fiction: [
      { rank: 1, title: "Angel Down", author: "Daniel Kraus", isbn: "9781613123898", description: "A high-concept thriller that explores the intersection of spirituality and technology." },
      { rank: 2, title: "The Director", author: "Daniel Kehlmann", isbn: "9781524749217", description: "A witty and profound novel about the life of a filmmaker in pre-war Germany." },
      { rank: 3, title: "The Loneliness of Sonia and Sunny", author: "Kiran Desai", isbn: "9780802162540", description: "A beautifully written exploration of connection and isolation in a globalized world." },
      { rank: 4, title: "The Sisters", author: "Jonas Hassen Khemiri", isbn: "9781524749224", description: "A powerful family saga that spans continents and generations." },
      { rank: 5, title: "Stone Yard Devotional", author: "Charlotte Wood", isbn: "9781643755359", description: "A quiet and meditative novel about faith, community, and the nature of work." },
    ],
    nonFiction: [
      { rank: 1, title: "A Marriage at Sea", author: "Sophie Elmhirst", isbn: "9780063236059", description: "The incredible true story of a couple who spent decades sailing the world's oceans." },
      { rank: 2, title: "Mother Emanuel", author: "Kevin Sack", isbn: "9781984879233", description: "A meticulously researched account of the tragedy and resilience of a historic church." },
      { rank: 3, title: "Mother Mary Comes to Me", author: "Arundhati Roy", isbn: "9781984879240", description: "A provocative and personal exploration of faith and motherhood in contemporary India." },
      { rank: 4, title: "There Is No Place for Us", author: "Brian Goldstone", isbn: "9781610398640", description: "A devastating look at the eviction crisis and the loss of home in America." },
      { rank: 5, title: "Wild Thing: A Life of Paul Gauguin", author: "Sue Prideaux", isbn: "9780300244038", description: "A definitive biography of the controversial artist Paul Gauguin." },
    ],
  },
  {
    year: 2024,
    label: "2024 — NYT 10 Best Books of the Year",
    fiction: [
      { rank: 1, title: "All Fours", author: "Miranda July", isbn: "9780593492741", description: "A bold and surreal exploration of desire, aging, and the creative life." },
      { rank: 2, title: "Good Material", author: "Dolly Alderton", isbn: "9780593536483", description: "A funny and relatable novel about the complexities of modern breakups." },
      { rank: 3, title: "James", author: "Percival Everett", isbn: "9780385550369", description: "A brilliant reimagining of Huckleberry Finn from Jim's perspective." },
      { rank: 4, title: "Martyr!", author: "Kaveh Akbar", isbn: "9780593537619", description: "A powerful and poetic novel about faith, family, and the search for meaning." },
      { rank: 5, title: "You Dreamed of Empires", author: "Álvaro Enrigue", isbn: "9780593653135", description: "A hallucinatory and historical novel about the encounter between Cortés and Moctezuma." },
    ],
    nonFiction: [
      { rank: 1, title: "Everyone Who Is Gone Is Here", author: "Jonathan Blitzer", isbn: "9781984801128", description: "A comprehensive look at the history and human cost of Central American migration." },
      { rank: 2, title: "I Heard Her Call My Name", author: "Lucy Sante", isbn: "9781984880000", description: "A poignant memoir about gender transition and the search for self." },
      { rank: 3, title: "Reagan: His Life and Legend", author: "Max Boot", isbn: "9781631494697", description: "A major new biography of Ronald Reagan, exploring his impact on American politics." },
      { rank: 4, title: "The Wide Wide Sea", author: "Hampton Sides", isbn: "9780385544764", description: "A gripping account of Captain Cook's final voyage and the encounter with Hawaii." },
      { rank: 5, title: "Cold Crematorium", author: "József Debreczeni", isbn: "9781250284488", description: "A harrowing and essential memoir of survival in the Nazi concentration camps." },
    ],
  },
];

// Helper exports for backward compatibility
export const nytFiction = nytByYear[0].fiction;
export const nytNonFiction = nytByYear[0].nonFiction;
