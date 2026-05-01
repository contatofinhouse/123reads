import { Book } from "./influencers";

export interface ThematicList {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  books: Book[];
}

export const thematicLists: ThematicList[] = [
  // --- Business & Tech ---
  {
    title: "Best Books for Entrepreneurs",
    slug: "best-books-for-entrepreneurs",
    description: "Essential reading for anyone building a business — from startup strategy to leadership and execution.",
    image: "/images/theme_entrepreneurs_1777649639796.png",
    category: "Business & Tech",
    books: [
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298" },
      { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", isbn: "9780062273208" },
      { title: "The Lean Startup", author: "Eric Ries", isbn: "9780307887894" },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992" },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242" }
    ]
  },
  {
    title: "Books About AI and the Future",
    slug: "books-about-ai-and-future",
    description: "Understanding artificial intelligence, its risks, its promises, and what it means for humanity.",
    image: "/images/theme_ai_1777649666905.png",
    category: "Business & Tech",
    books: [
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838" },
      { title: "Life 3.0", author: "Max Tegmark", isbn: "9781101946596" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", isbn: "9780812973815" }
    ]
  },
  // --- Fiction & Classics ---
  {
    title: "Must-Read Sci-Fi Classics",
    slug: "must-read-sci-fi-classics",
    description: "The science fiction novels that defined the genre and continue to shape how we think about the future.",
    image: "/images/theme_scifi_1777649652744.png",
    category: "Fiction & Classics",
    books: [
      { title: "Foundation", author: "Isaac Asimov", isbn: "9780553293357" },
      { title: "Dune", author: "Frank Herbert", isbn: "9780441013593" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524" },
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803" }
    ]
  },
  {
    title: "Books Every Teenager Should Read",
    slug: "books-every-teenager-should-read",
    description: "Coming-of-age classics and modern essentials that shape young minds and open new perspectives.",
    image: "/images/theme_teenager_1777649681991.png",
    category: "Fiction & Classics",
    books: [
      { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780060935467" },
      { title: "The Diary of a Young Girl", author: "Anne Frank", isbn: "9780553296983" },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007" },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011" },
      { title: "Lord of the Flies", author: "William Golding", isbn: "9780399501487" }
    ]
  },
  {
    title: "Best Fiction of the 21st Century",
    slug: "best-fiction-21st-century",
    description: "The novels from this century that have already earned their place among the all-time greats.",
    image: "/images/theme_fiction_1777649725844.png",
    category: "Fiction & Classics",
    books: [
      { title: "The Underground Railroad", author: "Colson Whitehead", isbn: "9780385542364" },
      { title: "Where the Crawdads Sing", author: "Delia Owens", isbn: "9780735219106" },
      { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251922" },
      { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345" },
      { title: "The Midnight Library", author: "Matt Haig", isbn: "9780525559474" }
    ]
  },
  // --- Non-Fiction & Growth ---
  {
    title: "Psychology & Human Behavior",
    slug: "psychology-and-human-behavior",
    description: "Understand why people think, decide, and act the way they do — from Nobel laureates to behavioral scientists.",
    image: "/images/theme_psychology_1777649695968.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "Influence", author: "Robert Cialdini", isbn: "9780062937650" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "The Power of Now", author: "Eckhart Tolle", isbn: "9781577314806" },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352" },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616" }
    ]
  },
  {
    title: "Essential History Books",
    slug: "essential-history-books",
    description: "Understanding the past to make sense of the present — from ancient civilizations to modern power dynamics.",
    image: "/images/theme_history_1777649712824.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959" },
      { title: "Team of Rivals", author: "Doris Kearns Goodwin", isbn: "9780743270755" },
      { title: "The Power Broker", author: "Robert Caro", isbn: "9780394720241" },
      { title: "Empire of the Summer Moon", author: "S.C. Gwynne", isbn: "9781416591054" },
      { title: "Why Nations Fail", author: "Daron Acemoglu", isbn: "9780307719225" }
    ]
  },
  {
    title: "Books for Personal Growth",
    slug: "books-for-personal-growth",
    description: "Transform your mindset, build better habits, and find deeper meaning with these life-changing reads.",
    image: "/images/theme_personal_growth_1777649738777.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023" },
      { title: "The Four Agreements", author: "Don Miguel Ruiz", isbn: "9781878424310" },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504" },
      { title: "The Artist's Way", author: "Julia Cameron", isbn: "9781585421466" }
    ]
  },
  // --- World Literature ---
  {
    title: "French Literature",
    slug: "french-literature",
    description: "Masterpieces of French literature, from romantic classics to existentialism.",
    image: "/images/french_literature_1777649371122.png",
    category: "World Literature",
    books: [
      { title: "The Stranger", author: "Albert Camus", isbn: "9780679720201" },
      { title: "Les Misérables", author: "Victor Hugo", isbn: "9780451419439" },
      { title: "The Count of Monte Cristo", author: "Alexandre Dumas", isbn: "9780140449266" },
      { title: "Madame Bovary", author: "Gustave Flaubert", isbn: "9780140449129" },
      { title: "In Search of Lost Time", author: "Marcel Proust", isbn: "9780812969646" }
    ]
  },
  {
    title: "English Literature",
    slug: "english-literature",
    description: "The pillars of English storytelling, exploring society, dystopia, and human nature.",
    image: "/images/english_literature_1777649384037.png",
    category: "World Literature",
    books: [
      { title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141439518" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Great Expectations", author: "Charles Dickens", isbn: "9780141439563" },
      { title: "Frankenstein", author: "Mary Shelley", isbn: "9780141439471" },
      { title: "Wuthering Heights", author: "Emily Brontë", isbn: "9780141439556" }
    ]
  },
  {
    title: "Italian Literature",
    slug: "italian-literature",
    description: "From epic medieval poetry to modern post-war realism.",
    image: "/images/italian_literature_1777649397042.png",
    category: "World Literature",
    books: [
      { title: "The Divine Comedy", author: "Dante Alighieri", isbn: "9780142437223" },
      { title: "My Brilliant Friend", author: "Elena Ferrante", isbn: "9781609450786" },
      { title: "The Name of the Rose", author: "Umberto Eco", isbn: "9780544176560" },
      { title: "The Decameron", author: "Giovanni Boccaccio", isbn: "9780140449303" },
      { title: "If on a winter's night a traveler", author: "Italo Calvino", isbn: "9780156439619" }
    ]
  },
  {
    title: "Portuguese Literature",
    slug: "portuguese-literature",
    description: "Rich narratives spanning Portugal and Brazil, touching on melancholy, blindness, and love.",
    image: "/images/portuguese_literature_1777649411785.png",
    category: "World Literature",
    books: [
      { title: "The Book of Disquiet", author: "Fernando Pessoa", isbn: "9780141183046" },
      { title: "Blindness", author: "José Saramago", isbn: "9780156007757" },
      { title: "The Lusiads", author: "Luís de Camões", isbn: "9780199539963" },
      { title: "Dom Casmurro", author: "Machado de Assis", isbn: "9780195103083" },
      { title: "The Relic", author: "Eça de Queirós", isbn: "9780940322479" }
    ]
  },
  {
    title: "Asian Literature",
    slug: "asian-literature",
    description: "A diverse collection of historical epics, modern surrealism, and groundbreaking sci-fi.",
    image: "/images/asian_literature_1777649426857.png",
    category: "World Literature",
    books: [
      { title: "The Tale of Genji", author: "Murasaki Shikibu", isbn: "9780142437148" },
      { title: "Norwegian Wood", author: "Haruki Murakami", isbn: "9780375704024" },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030" },
      { title: "Pachinko", author: "Min Jin Lee", isbn: "9781455563920" },
      { title: "The Art of War", author: "Sun Tzu", isbn: "9781590302255" }
    ]
  }
];
