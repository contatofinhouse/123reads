import { Book } from "./influencers";

export interface ThematicList {
  title: string;
  slug: string;
  description: string;
  books: Book[];
}

export const thematicLists: ThematicList[] = [
  {
    title: "Best Books for Entrepreneurs",
    slug: "best-books-for-entrepreneurs",
    description: "Essential reading for anyone building a business — from startup strategy to leadership and execution.",
    books: [
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298" },
      { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", isbn: "9780062273208" },
      { title: "The Lean Startup", author: "Eric Ries", isbn: "9780307887894" },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992" },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242" },
      { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910" },
      { title: "Built to Last", author: "Jim Collins", isbn: "9780060516406" },
      { title: "The 80/20 Principle", author: "Richard Koch", isbn: "9780385491747" },
      { title: "Creativity, Inc.", author: "Ed Catmull", isbn: "9780812993011" },
      { title: "Sam Walton: Made in America", author: "Sam Walton", isbn: "9780553562835" }
    ]
  },
  {
    title: "Must-Read Sci-Fi Classics",
    slug: "must-read-sci-fi-classics",
    description: "The science fiction novels that defined the genre and continue to shape how we think about the future.",
    books: [
      { title: "Foundation", author: "Isaac Asimov", isbn: "9780553293357" },
      { title: "Dune", author: "Frank Herbert", isbn: "9780441013593" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524" },
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803" },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030" },
      { title: "The Moon Is a Harsh Mistress", author: "Robert A. Heinlein", isbn: "9780312863555" },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien", isbn: "9780618640157" },
      { title: "The Master and Margarita", author: "Mikhail Bulgakov", isbn: "9780141180144" },
      { title: "Life 3.0", author: "Max Tegmark", isbn: "9781101946596" }
    ]
  },
  {
    title: "Books About AI and the Future",
    slug: "books-about-ai-and-future",
    description: "Understanding artificial intelligence, its risks, its promises, and what it means for humanity.",
    books: [
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838" },
      { title: "Life 3.0", author: "Max Tegmark", isbn: "9781101946596" },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" },
      { title: "The Structure of Scientific Revolutions", author: "Thomas S. Kuhn", isbn: "9780226458120" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242" },
      { title: "Merchants of Doubt", author: "Naomi Oreskes", isbn: "9781608193943" },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", isbn: "9780812973815" },
      { title: "Factfulness", author: "Hans Rosling", isbn: "9781250107817" }
    ]
  },
  {
    title: "Books Every Teenager Should Read",
    slug: "books-every-teenager-should-read",
    description: "Coming-of-age classics and modern essentials that shape young minds and open new perspectives.",
    books: [
      { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780060935467" },
      { title: "The Diary of a Young Girl", author: "Anne Frank", isbn: "9780553296983" },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011" },
      { title: "Anne of Green Gables", author: "L.M. Montgomery", isbn: "9781770497313" },
      { title: "Lord of the Flies", author: "William Golding", isbn: "9780399501487" },
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803" },
      { title: "Persepolis", author: "Marjane Satrapi", isbn: "9780375714573" },
      { title: "The Breadwinner", author: "Deborah Ellis", isbn: "9781554987931" }
    ]
  },
  {
    title: "Psychology & Human Behavior",
    slug: "psychology-and-human-behavior",
    description: "Understand why people think, decide, and act the way they do — from Nobel laureates to behavioral scientists.",
    books: [
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" },
      { title: "Influence", author: "Robert Cialdini", isbn: "9780062937650" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "The Power of Now", author: "Eckhart Tolle", isbn: "9781577314806" },
      { title: "Skin in the Game", author: "Nassim Nicholas Taleb", isbn: "9780425284643" },
      { title: "A New Earth", author: "Eckhart Tolle", isbn: "9780452289581" },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352" },
      { title: "Tribe", author: "Sebastian Junger", isbn: "9781455566389" },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616" },
      { title: "Can't Hurt Me", author: "David Goggins", isbn: "9781544512280" }
    ]
  },
  {
    title: "Essential History Books",
    slug: "essential-history-books",
    description: "Understanding the past to make sense of the present — from ancient civilizations to modern power dynamics.",
    books: [
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959" },
      { title: "Team of Rivals", author: "Doris Kearns Goodwin", isbn: "9780743270755" },
      { title: "The Power Broker", author: "Robert Caro", isbn: "9780394720241" },
      { title: "Empire of the Summer Moon", author: "S.C. Gwynne", isbn: "9781416591054" },
      { title: "Long Walk to Freedom", author: "Nelson Mandela", isbn: "9780316548182" },
      { title: "The Muqaddimah", author: "Ibn Khaldun", isbn: "9780691166285" },
      { title: "Why Nations Fail", author: "Daron Acemoglu", isbn: "9780307719225" },
      { title: "A Brief History of Time", author: "Stephen Hawking", isbn: "9780553380163" },
      { title: "The Fourth Turning", author: "William Strauss", isbn: "9780767900461" }
    ]
  },
  {
    title: "Best Fiction of the 21st Century",
    slug: "best-fiction-21st-century",
    description: "The novels from this century that have already earned their place among the all-time greats.",
    books: [
      { title: "The Underground Railroad", author: "Colson Whitehead", isbn: "9780385542364" },
      { title: "Where the Crawdads Sing", author: "Delia Owens", isbn: "9780735219106" },
      { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251922" },
      { title: "Lincoln in the Bardo", author: "George Saunders", isbn: "9780812985405" },
      { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345" },
      { title: "An American Marriage", author: "Tayari Jones", isbn: "9781616208776" },
      { title: "The Midnight Library", author: "Matt Haig", isbn: "9780525559474" },
      { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", isbn: "9780735220690" },
      { title: "Little Fires Everywhere", author: "Celeste Ng", isbn: "9780735224315" },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030" }
    ]
  },
  {
    title: "Books for Personal Growth",
    slug: "books-for-personal-growth",
    description: "Transform your mindset, build better habits, and find deeper meaning with these life-changing reads.",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849" },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023" },
      { title: "The Four Agreements", author: "Don Miguel Ruiz", isbn: "9781878424310" },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504" },
      { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", isbn: "9780876120798" },
      { title: "A New Earth", author: "Eckhart Tolle", isbn: "9780452289581" },
      { title: "The Artist's Way", author: "Julia Cameron", isbn: "9781585421466" }
    ]
  }
];
