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
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298", description: "How to build companies that create new things, featuring contrarian insights from the PayPal co-founder." },
      { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", isbn: "9780062273208", description: "A brutal and honest guide to leading a startup through the inevitable crises." },
      { title: "The Lean Startup", author: "Eric Ries", isbn: "9780307887894", description: "How constant innovation creates radically successful businesses." },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992", description: "Why some companies make the leap and others don't, based on years of research." },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242", description: "The revolutionary book that explained how disruption works in the business world." }
    ]
  },
  {
    title: "Books About AI and the Future",
    slug: "books-about-ai-and-future",
    description: "Understanding artificial intelligence, its risks, its promises, and what it means for humanity.",
    image: "/images/theme_ai_1777649666905.png",
    category: "Business & Tech",
    books: [
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838", description: "A deep dive into the risks and potential strategies for human survival in the age of AGI." },
      { title: "Life 3.0", author: "Max Tegmark", isbn: "9781101946596", description: "How AI will affect crime, war, justice, jobs, society and our very sense of being human." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", description: "The Nobel laureate's exploration of the two systems that drive our thoughts and decisions." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A provocative look at how biology and history have defined us and enhanced our understanding of what it means to be 'human'." },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", isbn: "9780812973815", description: "The impact of the highly improbable on our world and our perceptions." }
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
      { title: "Foundation", author: "Isaac Asimov", isbn: "9780553293357", description: "The first novel in the epic saga of the fall and rebirth of a galactic empire." },
      { title: "Dune", author: "Frank Herbert", isbn: "9780441013593", description: "The masterpiece of planetary ecology, politics, and mysticism set on the desert world of Arrakis." },
      { title: "1984", author: "George Orwell", isbn: "9780451524935", description: "The chillingly relevant prophecy about a dystopian world under perpetual surveillance." },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524", description: "A haunting vision of a future where humanity is sacrificed for stability and pleasure." },
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803", description: "A hilarious and absurdist adventure across the cosmos." }
    ]
  },
  {
    title: "Books Every Teenager Should Read",
    slug: "books-every-teenager-should-read",
    description: "Coming-of-age classics and modern essentials that shape young minds and open new perspectives.",
    image: "/images/theme_teenager_1777649681991.png",
    category: "Fiction & Classics",
    books: [
      { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780060935467", description: "A timeless classic about justice, innocence, and growing up in the American South." },
      { title: "The Diary of a Young Girl", author: "Anne Frank", isbn: "9780553296983", description: "The deeply moving and personal diary of a young girl hiding from the Nazis." },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007", description: "An allegorical novel about following your dreams and listening to your heart." },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011", description: "The beloved story of the four March sisters finding their way in the world." },
      { title: "Lord of the Flies", author: "William Golding", isbn: "9780399501487", description: "A dark exploration of human nature when civilization's rules are removed." }
    ]
  },
  {
    title: "Best Fiction of the 21st Century",
    slug: "best-fiction-21st-century",
    description: "The novels from this century that have already earned their place among the all-time greats.",
    image: "/images/theme_fiction_1777649725844.png",
    category: "Fiction & Classics",
    books: [
      { title: "The Underground Railroad", author: "Colson Whitehead", isbn: "9780385542364", description: "A Pulitzer Prize-winning novel that reimagines the historical escape route as a literal network of tracks and tunnels." },
      { title: "Where the Crawdads Sing", author: "Delia Owens", isbn: "9780735219106", description: "A lush and atmospheric story of a young girl growing up isolated in the North Carolina marshes." },
      { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251922", description: "A brilliant and modern take on David Copperfield set in the heart of Appalachia." },
      { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345", description: "A smart and funny novel about a female chemist turned cooking show host in the early 1960s." },
      { title: "The Midnight Library", author: "Matt Haig", isbn: "9780525559474", description: "A unique story about the infinite possibilities of the lives we could have lived." }
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
      { title: "Influence", author: "Robert Cialdini", isbn: "9780062937650", description: "The definitive guide to the psychology of persuasion and how to defend against it." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's memoir of the Holocaust and his theory on finding purpose in life." },
      { title: "The Power of Now", author: "Eckhart Tolle", isbn: "9781577314806", description: "A guide to spiritual enlightenment through living in the present moment." },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352", description: "How ancient stoic philosophy can help us turn challenges into opportunities." },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616", description: "A fascinating look at the science and art of breathing correctly for health and longevity." }
    ]
  },
  {
    title: "Essential History Books",
    slug: "essential-history-books",
    description: "Understanding the past to make sense of the present — from ancient civilizations to modern power dynamics.",
    image: "/images/theme_history_1777649712824.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959", description: "A concise survey of human history and the enduring themes that shape our species." },
      { title: "Team of Rivals", author: "Doris Kearns Goodwin", isbn: "9780743270755", description: "The story of how Abraham Lincoln brought his political opponents into his cabinet to save the Union." },
      { title: "The Power Broker", author: "Robert Caro", isbn: "9780394720241", description: "The epic biography of Robert Moses and the use of power to shape modern New York." },
      { title: "Empire of the Summer Moon", author: "S.C. Gwynne", isbn: "9781416591054", description: "The stunning history of the Comanche tribe and the struggle for the American West." },
      { title: "Why Nations Fail", author: "Daron Acemoglu", isbn: "9780307719225", description: "An analysis of why some nations prosper while others remain poor, focusing on political institutions." }
    ]
  },
  {
    title: "Books for Personal Growth",
    slug: "books-for-personal-growth",
    description: "Transform your mindset, build better habits, and find deeper meaning with these life-changing reads.",
    image: "/images/theme_personal_growth_1777649738777.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", description: "The private reflections of the Roman Emperor on stoicism and living a virtuous life." },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023", description: "How to overcome the internal resistance that prevents us from doing our creative work." },
      { title: "The Four Agreements", author: "Don Miguel Ruiz", isbn: "9781878424310", description: "A practical guide to personal freedom based on ancient Toltec wisdom." },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504", description: "A powerful memoir of escaping a survivalist family through the pursuit of education." },
      { title: "The Artist's Way", author: "Julia Cameron", isbn: "9781585421466", description: "A comprehensive course on discovering and recovering your creative self." }
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
      { title: "The Stranger", author: "Albert Camus", isbn: "9780679720201", description: "A landmark of existentialist fiction about an emotionally detached man caught in a senseless crime." },
      { title: "Les Misérables", author: "Victor Hugo", isbn: "9780451419439", description: "A massive epic of justice, love, and redemption set against the backdrop of post-revolutionary France." },
      { title: "The Count of Monte Cristo", author: "Alexandre Dumas", isbn: "9780140449266", description: "The ultimate tale of betrayal and meticulously planned revenge." },
      { title: "Madame Bovary", author: "Gustave Flaubert", isbn: "9780140449129", description: "A groundbreaking realistic novel about a woman's tragic search for romance beyond her provincial life." },
      { title: "In Search of Lost Time", author: "Marcel Proust", isbn: "9780812969646", description: "A monumental work exploring memory, time, and the complexities of high society." }
    ]
  },
  {
    title: "English Literature",
    slug: "english-literature",
    description: "The pillars of English storytelling, exploring society, dystopia, and human nature.",
    image: "/images/english_literature_1777649384037.png",
    category: "World Literature",
    books: [
      { title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141439518", description: "A sparkling comedy of manners about love, social standing, and first impressions." },
      { title: "1984", author: "George Orwell", isbn: "9780451524935", description: "A terrifying vision of a totalitarian future where truth is a casualty of power." },
      { title: "Great Expectations", author: "Charles Dickens", isbn: "9780141439563", description: "The coming-of-age story of an orphan named Pip and his mysterious benefactor." },
      { title: "Frankenstein", author: "Mary Shelley", isbn: "9780141439471", description: "The foundational work of science fiction exploring the consequences of playing God." },
      { title: "Wuthering Heights", author: "Emily Brontë", isbn: "9780141439556", description: "A wild and passionate tale of obsessive love on the Yorkshire moors." }
    ]
  },
  {
    title: "Italian Literature",
    slug: "italian-literature",
    description: "From epic medieval poetry to modern post-war realism.",
    image: "/images/italian_literature_1777649397042.png",
    category: "World Literature",
    books: [
      { title: "The Divine Comedy", author: "Dante Alighieri", isbn: "9780142437223", description: "A monumental journey through Hell, Purgatory, and Paradise." },
      { title: "My Brilliant Friend", author: "Elena Ferrante", isbn: "9781609450786", description: "A rich and intense story of a lifelong friendship between two girls in post-war Naples." },
      { title: "The Name of the Rose", author: "Umberto Eco", isbn: "9780544176560", description: "A historical murder mystery set in a 14th-century Italian monastery." },
      { title: "The Decameron", author: "Giovanni Boccaccio", isbn: "9780140449303", description: "A collection of 100 tales told by a group of youths sheltering from the Black Death." },
      { title: "If on a winter's night a traveler", author: "Italo Calvino", isbn: "9780156439619", description: "A postmodern masterpiece that plays with the relationship between reader and book." }
    ]
  },
  {
    title: "Portuguese Literature",
    slug: "portuguese-literature",
    description: "Rich narratives spanning Portugal and Brazil, touching on melancholy, blindness, and love.",
    image: "/images/portuguese_literature_1777649411785.png",
    category: "World Literature",
    books: [
      { title: "The Book of Disquiet", author: "Fernando Pessoa", isbn: "9780141183046", description: "A hauntingly beautiful and fragmentary collection of reflections on life and loneliness." },
      { title: "Blindness", author: "José Saramago", isbn: "9780156007757", description: "A terrifying parable about a city struck by a sudden epidemic of 'white blindness'." },
      { title: "The Lusiads", author: "Luís de Camões", isbn: "9780199539963", description: "The national epic of Portugal, celebrating the voyages of Vasco da Gama." },
      { title: "Dom Casmurro", author: "Machado de Assis", isbn: "9780195103083", description: "A psychological masterpiece exploring the ambiguity of memory and jealousy." },
      { title: "The Relic", author: "Eça de Queirós", isbn: "9780940322479", description: "A biting satire on religious hypocrisy in 19th-century Portugal." }
    ]
  },
  {
    title: "Asian Literature",
    slug: "asian-literature",
    description: "A diverse collection of historical epics, modern surrealism, and groundbreaking sci-fi.",
    image: "/images/asian_literature_1777649426857.png",
    category: "World Literature",
    books: [
      { title: "The Tale of Genji", author: "Murasaki Shikibu", isbn: "9780142437148", description: "The world's first novel, a grand and poetic exploration of life in the Heian court." },
      { title: "Norwegian Wood", author: "Haruki Murakami", isbn: "9780375704024", description: "A nostalgic and melancholic story of loss and sexuality in 1960s Tokyo." },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030", description: "A mind-expanding science fiction epic that reimagines humanity's first contact." },
      { title: "Pachinko", author: "Min Jin Lee", isbn: "9781455563920", description: "A sweeping saga following four generations of a Korean family in Japan." },
      { title: "The Art of War", author: "Sun Tzu", isbn: "9781590302255", description: "The ancient guide to strategy and conflict that remains essential today." }
    ]
  },
  {
    title: "NYT Best Sellers (Fiction)",
    slug: "nyt-best-sellers-fiction",
    description: "The current top-selling fiction books as ranked by the New York Times.",
    image: "/images/theme-nyt.png",
    category: "Current Rankings",
    books: [
      { title: "Hope Rises", author: "David Baldacci", isbn: "9781538750438", description: "The latest high-stakes thriller from David Baldacci, featuring Archer and his quest for justice." },
      { title: "The Correspondent", author: "Virginia Evans", isbn: "9780593441275", description: "A gripping novel about a journalist caught in a web of international intrigue and secrets." },
      { title: "Yesteryear", author: "Caro Claire Burke", isbn: "9781538740125", description: "A touching and nostalgic story about the power of memories and the importance of family." },
      { title: "Rites of the Starling", author: "Devney Perry", isbn: "9781951590215", description: "A passionate and emotional romance about finding love in the most unexpected places." },
      { title: "Starside", author: "Alex Aster", isbn: "9781419760884", description: "The thrilling continuation of the Lightlark saga, filled with magic, betrayal, and romance." }
    ]
  },
  {
    title: "Best Books for Productivity",
    slug: "best-books-productivity",
    description: "Master your time and focus with these essential productivity reads.",
    image: "/images/theme-productivity.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "Atomic Habits", author: "James Clear", isbn: "9780735211292", description: "The definitive guide to building good habits and breaking bad ones through tiny changes." },
      { title: "Deep Work", author: "Cal Newport", isbn: "9781455586691", description: "How to cultivate intense focus and eliminate distractions in a noisy world." },
      { title: "Getting Things Done", author: "David Allen", isbn: "9780143126560", description: "The classic system for stress-free productivity and personal organization." },
      { title: "The 4-Hour Workweek", author: "Tim Ferriss", isbn: "9780307465351", description: "Escape the 9-5 and live anywhere with the New Rich mindset." },
      { title: "Essentialism", author: "Greg McKeown", isbn: "9780804137386", description: "The disciplined pursuit of less: how to focus on what truly matters." }
    ]
  },
  {
    title: "Inspirational Biographies",
    slug: "inspirational-biographies",
    description: "Life stories of incredible individuals that will inspire and motivate you.",
    image: "/images/theme-biographies.png",
    category: "Non-Fiction & Growth",
    books: [
      { title: "Steve Jobs", author: "Walter Isaacson", isbn: "9781451648539", description: "The definitive biography of the Apple co-founder, based on exclusive interviews." },
      { title: "Elon Musk", author: "Ashlee Vance", isbn: "9780062301239", description: "The story of the man behind SpaceX and Tesla and his vision for the future." },
      { title: "Becoming", author: "Michelle Obama", isbn: "9781524763138", description: "A deeply personal memoir about the former First Lady's life and journey." },
      { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910", description: "The candid memoir of the creator of Nike about building a global empire." },
      { title: "The Autobiography of Malcolm X", author: "Malcolm X", isbn: "9780345350688", description: "A landmark work of 20th-century literature about struggle, change, and faith." }
    ]
  }
];
