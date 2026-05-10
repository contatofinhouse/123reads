export interface Book {
  title: string;
  author: string;
  isbn?: string;
  rating?: number;
  description?: string;
}

export interface Influencer {
  name: string;
  slug: string;
  bio: string;
  image: string;
  category: string;
  books: Book[];
}

export const influencers: Influencer[] = [
  {
    name: "Bill Gates",
    slug: "bill-gates",
    bio: "Co-founder of Microsoft and one of the most prolific readers among tech leaders. Shares annual reading lists on GatesNotes.",
    image: "https://unavatar.io/twitter/BillGates",
    category: "Tech",
    books: [
      { title: "Business Adventures", author: "John Brooks", isbn: "9780812969184", description: "Warren Buffett's favorite business book. A classic set of case studies on corporate behavior." },
      { title: "The Better Angels of Our Nature", author: "Steven Pinker", isbn: "9780143122012", description: "A data-driven history of the decline of violence in human society." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A provocative look at the history and future of the human species." },
      { title: "The Spy and the Traitor", author: "Ben Macintyre", isbn: "9781101904213", description: "One of the greatest real-life spy stories ever told." },
      { title: "Range", author: "David Epstein", isbn: "9780735214484", description: "Why generalists triumph in a specialized world." },
      { title: "How to Avoid a Climate Disaster", author: "Bill Gates", isbn: "9780385546133", description: "A practical guide for how to get to net-zero greenhouse gas emissions." },
      { title: "Factfulness", author: "Hans Rosling", isbn: "9781250107817", description: "Ten reasons we're wrong about the world—and why things are better than you think." },
      { title: "Enlightenment Now", author: "Steven Pinker", isbn: "9780143111382", description: "A manifesto for reason, science, and humanism." },
      { title: "The Rosie Project", author: "Graeme Simsion", isbn: "9781476729091", description: "A charming novel about an eccentric genetics professor seeking love." },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504", description: "A powerful memoir of escaping a survivalist family through education." }
    ]
  },
  {
    name: "Elon Musk",
    slug: "elon-musk",
    bio: "CEO of Tesla and SpaceX. Credits books with teaching him rocket science and shaping his vision for humanity's future.",
    image: "https://unavatar.io/twitter/elonmusk",
    category: "Tech",
    books: [
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803", description: "A hilarious space adventure that became a philosophy for Elon Musk." },
      { title: "Foundation", author: "Isaac Asimov", isbn: "9780553293357", description: "The epic saga of a Galactic Empire's collapse and rebirth." },
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298", description: "Notes on startups, or how to build the future." },
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838", description: "A deep dive into the risks and potential of artificial general intelligence." },
      { title: "Structures: Or Why Things Don't Fall Down", author: "J.E. Gordon", isbn: "9780306812835", description: "The book Musk used to teach himself rocket engineering." },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien", isbn: "9780618640157", description: "The definitive high-fantasy masterpiece." },
      { title: "Einstein: His Life and Universe", author: "Walter Isaacson", isbn: "9780743264747", description: "The definitive biography of the 20th century's greatest mind." },
      { title: "Merchants of Doubt", author: "Naomi Oreskes", isbn: "9781608193943", description: "How a handful of scientists obscured the truth on issues from tobacco to global warming." },
      { title: "The Moon Is a Harsh Mistress", author: "Robert A. Heinlein", isbn: "9780312863555", description: "A classic of political science fiction set in a lunar colony." },
      { title: "Life 3.0", author: "Max Tegmark", isbn: "9781101946596", description: "Being human in the age of artificial intelligence." }
    ]
  },
  {
    name: "Oprah Winfrey",
    slug: "oprah-winfrey",
    bio: "Media mogul and founder of Oprah's Book Club, one of the most influential book recommendation platforms in the world.",
    image: "https://unavatar.io/twitter/Oprah",
    category: "Culture",
    books: [
      { title: "A New Earth", author: "Eckhart Tolle", isbn: "9780452289581", description: "A spiritual guide to awakening to your life's purpose and transcending the ego." },
      { title: "The Underground Railroad", author: "Colson Whitehead", isbn: "9780385542364", description: "A Pulitzer Prize-winning novel about a slave's harrowing escape via a literal underground train system." },
      { title: "Becoming", author: "Michelle Obama", isbn: "9781524763138", description: "The deeply personal memoir of the former First Lady of the United States." },
      { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251922", description: "A modern retelling of David Copperfield set in the mountains of southern Appalachia." },
      { title: "The Covenant of Water", author: "Abraham Verghese", isbn: "9780802162175", description: "A multi-generational epic set in Kerala, India, following a family with a peculiar secret." },
      { title: "The Color Purple", author: "Alice Walker", isbn: "9780156028356", description: "A classic story of resilience and empowerment in the American South." },
      { title: "An American Marriage", author: "Tayari Jones", isbn: "9781616208776", description: "A powerful exploration of how an unexpected incarceration affects a young couple's marriage." },
      { title: "Beloved", author: "Toni Morrison", isbn: "9781400033416", description: "A haunting masterpiece about the legacy of slavery and a mother's impossible choice." },
      { title: "Wild", author: "Cheryl Strayed", isbn: "9780307476074", description: "The true story of an 1,100-mile solo hike that helped a woman heal from grief." },
      { title: "The Sun Does Shine", author: "Anthony Ray Hinton", isbn: "9781250309471", description: "A powerful memoir about spending thirty years on death row for a crime he didn't commit." }
    ]
  },
  {
    name: "Barack Obama",
    slug: "barack-obama",
    bio: "44th President of the United States. Shares annual favorite books lists spanning literary fiction, history, and journalism.",
    image: "https://unavatar.io/twitter/BarackObama",
    category: "Culture",
    books: [
      { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A sweeping narrative of human history, from the first humans to the present day." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", description: "A groundbreaking look at the two systems that drive the way we think." },
      { title: "The Power Broker", author: "Robert Caro", isbn: "9780394720241", description: "The definitive biography of Robert Moses and the use of power in New York." },
      { title: "Team of Rivals", author: "Doris Kearns Goodwin", isbn: "9780743270755", description: "The political genius of Abraham Lincoln as seen through his cabinet." },
      { title: "The Wager", author: "David Grann", isbn: "9780385534260", description: "A gripping tale of shipwreck, survival, and savagery." },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504", description: "A memoir of a woman who leaves her survivalist family to pursue an academic career." },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030", description: "A mind-bending science fiction epic about humanity's first contact with aliens." },
      { title: "Beloved", author: "Toni Morrison", isbn: "9781400033416", description: "A powerful novel about the haunting legacy of slavery." },
      { title: "Lincoln in the Bardo", author: "George Saunders", isbn: "9780812985405", description: "An experimental novel about Abraham Lincoln's grief over the death of his son." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's account of survival in Nazi concentration camps and his search for meaning." }
    ]
  },
  {
    name: "Warren Buffett",
    slug: "warren-buffett",
    bio: "The Oracle of Omaha. Spends 80% of his day reading and credits compounding knowledge as his greatest investment.",
    image: "https://unavatar.io/twitter/WarrenBuffett",
    category: "Business",
    books: [
      { title: "The Intelligent Investor", author: "Benjamin Graham", isbn: "9780060555665", description: "The definitive book on value investing and defensive portfolio management." },
      { title: "Security Analysis", author: "Benjamin Graham", isbn: "9780071592536", description: "The 'bible' of financial analysis and corporate valuation." },
      { title: "Poor Charlie's Almanack", author: "Charles T. Munger", isbn: "9781578645015", description: "The wit and wisdom of Charlie Munger, Warren Buffett's longtime partner." },
      { title: "The Outsiders", author: "William Thorndike, Jr.", isbn: "9781422162675", description: "Eight unconventional CEOs and their radically rational blueprint for success." },
      { title: "The Most Important Thing", author: "Howard Marks", isbn: "9780231153683", description: "Uncommon sense for the thoughtful investor on risk and market cycles." },
      { title: "Business Adventures", author: "John Brooks", isbn: "9780812969184", description: "Twelve classic tales from the world of Wall Street." },
      { title: "Common Stocks and Uncommon Profits", author: "Philip Fisher", isbn: "9780471445500", description: "A guide to finding high-growth companies with strong qualitative traits." },
      { title: "The Essays of Warren Buffett", author: "Lawrence Cunningham", isbn: "9781611637588", description: "A curated collection of Buffett's letters to shareholders, organized by topic." },
      { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910", description: "A memoir by the creator of Nike about building a global brand from scratch." },
      { title: "Tap Dancing to Work", author: "Carol Loomis", isbn: "9781591846215", description: "A collection of Fortune magazine articles covering Warren Buffett's career." }
    ]
  },
  {
    name: "Tim Ferriss",
    slug: "tim-ferriss",
    bio: "Author of The 4-Hour Work Week. His podcast has aggregated thousands of book recommendations from world-class performers.",
    image: "https://unavatar.io/twitter/tferriss",
    category: "Business",
    books: [
      { title: "The 80/20 Principle", author: "Richard Koch", isbn: "9780385491747", description: "How to achieve more with less by focusing on the 20% of efforts that produce 80% of results." },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023", description: "A succinct and inspiring guide to overcoming creative blocks and resistance." },
      { title: "Influence", author: "Robert Cialdini", isbn: "9780062937650", description: "The classic book on the psychology of persuasion and how to apply it." },
      { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", isbn: "9780062273208", description: "Brutal honesty on how difficult it is to lead a company through tough times." },
      { title: "Vagabonding", author: "Rolf Potts", isbn: "9780812992182", description: "The essential guide to long-term solo travel and the mindset of a wanderer." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A sweeping journey through the history of human evolution." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "Finding purpose and hope even in the darkest of circumstances." },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", description: "The private reflections of a Roman Emperor on stoic philosophy." },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352", description: "How to turn trials into triumphs using ancient wisdom." },
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849", description: "A poetic journey of a man seeking spiritual enlightenment during the time of the Buddha." }
    ]
  },
  {
    name: "Jeff Bezos",
    slug: "jeff-bezos",
    bio: "Founder of Amazon. Known for his voracious reading habit and sending books to his executive team as required reading.",
    image: "https://unavatar.io/twitter/JeffBezos",
    category: "Tech",
    books: [
      { title: "Built to Last", author: "Jim Collins", isbn: "9780060516406", description: "Successful habits of visionary companies that stand the test of time." },
      { title: "Creation", author: "Steve Grand", isbn: "9780674011137", description: "Life and how to make it—a look at artificial life and intelligence." },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242", description: "Why great companies can fail even when they do everything right." },
      { title: "Sam Walton: Made in America", author: "Sam Walton", isbn: "9780553562835", description: "The story of Walmart and the leadership philosophy of its founder." },
      { title: "The Goal", author: "Eliyahu M. Goldratt", isbn: "9780884271956", description: "A business novel that introduced the Theory of Constraints." },
      { title: "The Remains of the Day", author: "Kazuo Ishiguro", isbn: "9780679731726", description: "A profound novel about duty, regret, and the nature of love." },
      { title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", isbn: "9780201835953", description: "Classic essays on software engineering and project management." },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992", description: "Why some companies make the leap and others don't." },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", isbn: "9780812973815", description: "The impact of highly improbable events on our world and our lives." },
      { title: "Lean Thinking", author: "James P. Womack", isbn: "9780743249270", description: "Banish waste and create wealth in your corporation." }
    ]
  },
  {
    name: "Mark Zuckerberg",
    slug: "mark-zuckerberg",
    bio: "CEO of Meta. Ran a Year of Books challenge reading a new book every two weeks and sharing picks with millions.",
    image: "https://unavatar.io/twitter/finkd",
    category: "Tech",
    books: [
      { title: "The Muqaddimah", author: "Ibn Khaldun", isbn: "9780691166285", description: "A foundational text of historiography and sociology from the 14th century." },
      { title: "The New Jim Crow", author: "Michelle Alexander", isbn: "9781595588609", description: "Mass incarceration in the age of colorblindness." },
      { title: "Why Nations Fail", author: "Daron Acemoglu", isbn: "9780307719225", description: "The origins of power, prosperity, and poverty." },
      { title: "The Rational Optimist", author: "Matt Ridley", isbn: "9780061452062", description: "How prosperity evolves through the exchange of ideas." },
      { title: "Portfolios of the Poor", author: "Daryl Collins", isbn: "9780691148199", description: "How the world's poor live on $2 a day." },
      { title: "The End of Power", author: "Moisés Naím", isbn: "9780465065691", description: "How power is becoming easier to get, harder to use—and easier to lose." },
      { title: "Creativity, Inc.", author: "Ed Catmull", isbn: "9780812993011", description: "Overcoming the unseen forces that stand in the way of true inspiration." },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030", description: "A sprawling sci-fi masterpiece about humanity's place in the cosmos." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A brilliant narrative of human history." },
      { title: "The Structure of Scientific Revolutions", author: "Thomas S. Kuhn", isbn: "9780226458120", description: "The landmark book that introduced the concept of a 'paradigm shift'." }
    ]
  },
  {
    name: "Reese Witherspoon",
    slug: "reese-witherspoon",
    bio: "Academy Award-winning actress and founder of Reese's Book Club, turning countless novels into bestsellers and film adaptations.",
    image: "https://unavatar.io/twitter/ReeseW",
    category: "Culture",
    books: [
      { title: "Where the Crawdads Sing", author: "Delia Owens", isbn: "9780735219106", description: "A beautiful and mysterious coming-of-age story set in the marshes of North Carolina." },
      { title: "Little Fires Everywhere", author: "Celeste Ng", isbn: "9780735224315", description: "An exploration of the weight of secrets and the nature of art and identity." },
      { title: "Wild", author: "Cheryl Strayed", isbn: "9780307476074", description: "A powerful memoir of self-discovery on the Pacific Crest Trail." },
      { title: "Daisy Jones & The Six", author: "Taylor Jenkins Reid", isbn: "9781524798628", description: "A gripping novel about the whirlwind rise of an iconic 1970s rock group." },
      { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", isbn: "9780735220690", description: "A heartwarming and quirky story about overcoming social isolation." },
      { title: "The Last Letter from Your Lover", author: "Jojo Moyes", isbn: "9780143121107", description: "A sophisticated and romantic story of missed connections and enduring love." },
      { title: "Such a Fun Age", author: "Kiley Reid", isbn: "9780525541905", description: "A striking and contemporary look at race and privilege." },
      { title: "Malibu Rising", author: "Taylor Jenkins Reid", isbn: "9781524798659", description: "One night that changes a family's life forever on the coast of Malibu." },
      { title: "The Midnight Library", author: "Matt Haig", isbn: "9780525559474", description: "A unique novel about all the different lives you could have lived." },
      { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345", description: "A sharp and funny look at a female scientist's struggle for recognition in the 1960s." }
    ]
  },
  {
    name: "Lex Fridman",
    slug: "lex-fridman",
    bio: "AI researcher and podcaster. His reading list spans existential philosophy, classic literature, and cutting-edge science.",
    image: "https://unavatar.io/twitter/lexfridman",
    category: "Science",
    books: [
      { title: "1984", author: "George Orwell", isbn: "9780451524935", description: "The definitive dystopian novel about surveillance and totalitarism." },
      { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", isbn: "9780374528379", description: "A complex philosophical novel exploring faith, doubt, and morality." },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524", description: "A chilling vision of a technologically advanced future where happiness is enforced." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's account of survival and his theory of logotherapy." },
      { title: "Dune", author: "Frank Herbert", isbn: "9780441013593", description: "The epic science fiction saga of politics, religion, and power." },
      { title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9780486415871", description: "A psychological study of a murderer's conscience and redemption." },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", description: "Timeless stoic wisdom from a Roman emperor." },
      { title: "The Stranger", author: "Albert Camus", isbn: "9780679720201", description: "A landmark of existentialist literature about the absurdity of life." },
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849", description: "A spiritual journey towards peace and self-realization." },
      { title: "The Master and Margarita", author: "Mikhail Bulgakov", isbn: "9780141180144", description: "A satirical and fantastical masterpiece about the devil visiting Moscow." }
    ]
  },
  {
    name: "Emma Watson",
    slug: "emma-watson",
    bio: "Actress and UN Women Goodwill Ambassador. Founded the feminist book club Our Shared Shelf, championing diverse voices.",
    image: "https://unavatar.io/twitter/EmmaWatson",
    category: "Culture",
    books: [
      { title: "Just Kids", author: "Patti Smith", isbn: "9780060936228", description: "A poignant memoir of art, friendship, and the early years of punk rock." },
      { title: "My Life on the Road", author: "Gloria Steinem", isbn: "9780679456209", description: "A travelogue of a life spent in activism and the feminist movement." },
      { title: "The Argonauts", author: "Maggie Nelson", isbn: "9781555977351", description: "A genre-defying memoir about family, motherhood, and queer identity." },
      { title: "Persepolis", author: "Marjane Satrapi", isbn: "9780375714573", description: "A graphic memoir of growing up during the Islamic Revolution in Iran." },
      { title: "Beloved", author: "Toni Morrison", isbn: "9781400033416", description: "A profound exploration of the trauma of slavery." },
      { title: "The Color Purple", author: "Alice Walker", isbn: "9780156028356", description: "A classic story of sisterhood and survival." },
      { title: "Why I'm No Longer Talking to White People About Race", author: "Reni Eddo-Lodge", isbn: "9781635572957", description: "A timely and essential look at institutional racism." },
      { title: "The Handmaid's Tale", author: "Margaret Atwood", isbn: "9780385490818", description: "A chillingly relevant dystopian novel about a patriarchal society." },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011", description: "The beloved story of the four March sisters' journey into adulthood." },
      { title: "Mom & Me & Mom", author: "Maya Angelou", isbn: "9780812987683", description: "A moving account of Angelou's reconciliation with her mother." }
    ]
  },
  {
    name: "Stephen King",
    slug: "stephen-king",
    bio: "The King of Horror and one of the most prolific authors alive. Reads 70-80 books a year and shares recommendations constantly.",
    image: "https://unavatar.io/twitter/StephenKing",
    category: "Authors",
    books: [
      { title: "Lord of the Flies", author: "William Golding", isbn: "9780399501487", description: "A dark and unsettling exploration of human nature and the loss of innocence." },
      { title: "Bleak House", author: "Charles Dickens", isbn: "9780141439723", description: "A sprawling and masterful critique of the English legal system." },
      { title: "Blood Meridian", author: "Cormac McCarthy", isbn: "9780679728757", description: "A brutal and poetic epic of violence and nihilism on the American frontier." },
      { title: "Invisible Man", author: "Ralph Ellison", isbn: "9780679732761", description: "A powerful and surreal novel about racial identity and invisibility in America." },
      { title: "The Haunting of Hill House", author: "Shirley Jackson", isbn: "9780143039983", description: "A psychological horror masterpiece about a house that may be alive." },
      { title: "1984", author: "George Orwell", isbn: "9780451524935", description: "A terrifying vision of a future under absolute surveillance." },
      { title: "Misery", author: "Stephen King", isbn: "9781501143106", description: "A tense and claustrophobic thriller about obsession and survival." },
      { title: "Watership Down", author: "Richard Adams", isbn: "9780743277709", description: "An epic adventure following a group of rabbits seeking a new home." },
      { title: "The Old Man and the Sea", author: "Ernest Hemingway", isbn: "9780684801223", description: "A short but powerful story of endurance and a man's battle with nature." },
      { title: "Shirley Jackson: A Rather Haunted Life", author: "Ruth Franklin", isbn: "9780871403131", description: "An insightful biography of the gothic horror master." }
    ]
  },
  {
    name: "Neil deGrasse Tyson",
    slug: "neil-degrasse-tyson",
    bio: "Astrophysicist and science communicator. His reading list is a masterclass in scientific literacy and critical thinking.",
    image: "https://unavatar.io/twitter/neiltyson",
    category: "Science",
    books: [
      { title: "Gulliver's Travels", author: "Jonathan Swift", isbn: "9780141439495", description: "A classic satire on human nature and the travelers' tales of the 18th century." },
      { title: "The Origin of Species", author: "Charles Darwin", isbn: "9780451529060", description: "The foundational text of evolutionary biology." },
      { title: "Isaac Newton", author: "James Gleick", isbn: "9781400032952", description: "A brilliant biography of the father of modern science." },
      { title: "The Age of Reason", author: "Thomas Paine", isbn: "9780486433936", description: "An influential pamphlet challenging institutionalized religion." },
      { title: "On the Nature of Things", author: "Lucretius", isbn: "9780140447965", description: "A 1st-century BCE poem exploring Epicurean philosophy and the universe." },
      { title: "The Art of War", author: "Sun Tzu", isbn: "9781599869773", description: "The ancient Chinese military treatise that remains a guide to strategy today." },
      { title: "The Prince", author: "Niccolò Machiavelli", isbn: "9780486272740", description: "The definitive work on political realism and the exercise of power." },
      { title: "A Short History of Nearly Everything", author: "Bill Bryson", isbn: "9780767908184", description: "A popular science book that covers the history of science and humanity." },
      { title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434", description: "A journey through space and time, exploring our place in the universe." },
      { title: "The Wealth of Nations", author: "Adam Smith", isbn: "9780553585971", description: "The seminal work on classical economics and the free market." }
    ]
  },
  {
    name: "Steve Jobs",
    slug: "steve-jobs",
    bio: "Co-founder of Apple. His eclectic reading — from Zen Buddhism to business strategy — shaped the philosophy of Apple's design.",
    image: "https://unavatar.io/wikipedia/Steve_Jobs",
    category: "Tech",
    books: [
      { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", isbn: "9780876120798", description: "A deeply spiritual memoir that was a favorite of Steve Jobs." },
      { title: "Be Here Now", author: "Ram Dass", isbn: "9780517543054", description: "A guide to mindfulness and conscious living from the psychedelic era." },
      { title: "Diet for a Small Planet", author: "Frances Moore Lappé", isbn: "9780345321206", description: "A groundbreaking look at the intersection of diet and environmentalism." },
      { title: "Only the Paranoid Survive", author: "Andrew S. Grove", isbn: "9780385483827", description: "How to navigate strategic inflection points in business." },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242", description: "Why disruption happens and how to manage it." },
      { title: "Zen Mind, Beginner's Mind", author: "Shunryu Suzuki", isbn: "9781590308493", description: "A classic introduction to Zen practice and philosophy." },
      { title: "Moby Dick", author: "Herman Melville", isbn: "9780142437247", description: "The epic tale of a captain's obsessive hunt for a white whale." },
      { title: "King Lear", author: "William Shakespeare", isbn: "9780743482769", description: "One of Shakespeare's greatest tragedies about power and madness." },
      { title: "1984", author: "George Orwell", isbn: "9780451524935", description: "A chilling warning about totalitarism and surveillance." },
      { title: "Atlas Shrugged", author: "Ayn Rand", isbn: "9780451191144", description: "A controversial philosophical novel about individualism and capitalism." }
    ]
  },
  {
    name: "Richard Branson",
    slug: "richard-branson",
    bio: "Founder of the Virgin Group. An avid reader who believes books are the best way to learn from others' adventures.",
    image: "https://unavatar.io/twitter/richardbranson",
    category: "Business",
    books: [
      { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", isbn: "9780345514400", description: "A powerful and poetic memoir of growing up in the American South during the Jim Crow era." },
      { title: "Long Walk to Freedom", author: "Nelson Mandela", isbn: "9780316548182", description: "The autobiography of the anti-apartheid revolutionary and South African president." },
      { title: "Stalingrad", author: "Antony Beevor", isbn: "9780140284584", description: "A definitive and harrowing account of one of the most brutal battles in human history." },
      { title: "Wild Swans", author: "Jung Chang", isbn: "9780743246989", description: "A multi-generational family saga that spans the history of modern China." },
      { title: "A Brief History of Time", author: "Stephen Hawking", isbn: "9780553380163", description: "A classic work of popular science that explores the origin and fate of the universe." },
      { title: "The Tipping Point", author: "Malcolm Gladwell", isbn: "9780316346627", description: "How small changes can have a huge impact on our lives and the world." },
      { title: "Mandela's Way", author: "Richard Stengel", isbn: "9780307460691", description: "The core principles and values that guided Nelson Mandela's life and leadership." },
      { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910", description: "The candid memoir of the creator of Nike about building a global empire." },
      { title: "The Art of Happiness", author: "Dalai Lama", isbn: "9781573227544", description: "A guide to spiritual enlightenment and living a life of compassion and joy." },
      { title: "Steve Jobs", author: "Walter Isaacson", isbn: "9781451648539", description: "The definitive biography of the Apple co-founder, based on exclusive interviews." }
    ]
  },
  {
    name: "Malala Yousafzai",
    slug: "malala-yousafzai",
    bio: "Nobel Peace Prize laureate and education activist. A passionate reader who champions stories of resilience and justice.",
    image: "https://unavatar.io/twitter/Malala",
    category: "Culture",
    books: [
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007", description: "An allegorical novel about following your dreams and listening to your heart." },
      { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", isbn: "9781594489501", description: "A powerful and moving story of two women in Afghanistan and their journey of survival and friendship." },
      { title: "Anne of Green Gables", author: "L.M. Montgomery", isbn: "9781770497313", description: "The classic coming-of-age story of a young orphan girl and her adventures in Prince Edward Island." },
      { title: "The Breadwinner", author: "Deborah Ellis", isbn: "9781554987931", description: "A poignant story of a young girl in Afghanistan who disguises herself as a boy to support her family." },
      { title: "I Am Malala", author: "Malala Yousafzai", isbn: "9780316322423", description: "The inspiring autobiography of the young education activist and Nobel Peace Prize laureate." },
      { title: "The Kite Runner", author: "Khaled Hosseini", isbn: "9781594631931", description: "A tragic and redemptive story of friendship, betrayal, and the complexities of life in Afghanistan." },
      { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780060935467", description: "A timeless classic about justice, innocence, and growing up in the American South." },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011", description: "The beloved story of the four March sisters finding their way in the world." },
      { title: "The Diary of a Young Girl", author: "Anne Frank", isbn: "9780553296983", description: "The deeply moving and personal diary of a young girl hiding from the Nazis." },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504", description: "A powerful memoir of escaping a survivalist family through the pursuit of education." }
    ]
  },
  {
    name: "Ray Dalio",
    slug: "ray-dalio",
    bio: "Founder of Bridgewater Associates and author of Principles. Approaches reading as a systematic tool for understanding reality.",
    image: "https://unavatar.io/twitter/RayDalio",
    category: "Business",
    books: [
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959", description: "A concise survey of human history and the enduring themes that shape our species." },
      { title: "River Out of Eden", author: "Richard Dawkins", isbn: "9780465069903", description: "A brilliant and accessible work on evolutionary biology and the origins of life." },
      { title: "The Hero with a Thousand Faces", author: "Joseph Campbell", isbn: "9781577315933", description: "The foundational work on mythology and the hero's journey." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A provocative look at how biology and history have defined us." },
      { title: "The Changing World Order", author: "Ray Dalio", isbn: "9781982160272", description: "A systematic analysis of why nations succeed and fail throughout history." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", description: "The Nobel laureate's exploration of the two systems that drive our thoughts." },
      { title: "The Fourth Turning", author: "William Strauss", isbn: "9780767900461", description: "A provocative theory on the cycles of history and the future of American society." },
      { title: "Einstein's Mistakes", author: "Hans C. Ohanian", isbn: "9780393337686", description: "An insightful look at the errors and missteps of one of history's greatest scientists." },
      { title: "The Spiritual Brain", author: "Mario Beauregard", isbn: "9780061625985", description: "A neuroscientific exploration of spiritual and religious experiences." },
      { title: "Genome", author: "Matt Ridley", isbn: "9780060932909", description: "An engaging journey through the human genome and its impact on our lives." }
    ]
  },
  {
    name: "Joe Rogan",
    slug: "joe-rogan",
    bio: "Podcaster and UFC commentator. His show has made obscure books into bestsellers overnight through passionate discussions.",
    image: "https://unavatar.io/twitter/joerogan",
    category: "Culture",
    books: [
      { title: "The Book of Five Rings", author: "Miyamoto Musashi", isbn: "9781590302484", description: "The classic Japanese work on strategy and mindset by the legendary swordsman." },
      { title: "Empire of the Summer Moon", author: "S.C. Gwynne", isbn: "9781416591054", description: "The stunning history of the Comanche tribe and the struggle for the American West." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A provocative look at how biology and history have defined us." },
      { title: "Tribe", author: "Sebastian Junger", isbn: "9781455566389", description: "An exploration of why we need community and how modern society is failing us." },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023", description: "How to overcome the internal resistance that prevents us from doing our creative work." },
      { title: "Endure", author: "Alex Hutchinson", isbn: "9780062499981", description: "A fascinating look at the limits of human performance and the role of the mind." },
      { title: "Can't Hurt Me", author: "David Goggins", isbn: "9781544512280", description: "The incredible story of a man who transformed himself from overweight and insecure into a Navy SEAL." },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616", description: "A fascinating look at the science and art of breathing correctly for health and longevity." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's memoir of the Holocaust and his theory on finding purpose in life." },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352", description: "How ancient stoic philosophy can help us turn challenges into opportunities." }
    ]
  },
  {
    name: "Naval Ravikant",
    slug: "naval-ravikant",
    bio: "AngelList co-founder and philosopher-investor. His reading list blends ancient wisdom with modern science and economics.",
    image: "https://unavatar.io/twitter/naval",
    category: "Tech",
    books: [
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849", description: "A spiritual journey towards peace and self-realization." },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", description: "The private reflections of the Roman Emperor on stoicism and living a virtuous life." },
      { title: "Poor Charlie's Almanack", author: "Charles T. Munger", isbn: "9781578645015", description: "The wisdom of Warren Buffett's longtime partner on life and investing." },
      { title: "Skin in the Game", author: "Nassim Nicholas Taleb", isbn: "9780425284643", description: "The hidden asymmetries in daily life and the importance of having personal risk in your decisions." },
      { title: "The Origin of Species", author: "Charles Darwin", isbn: "9780451529060", description: "The foundational text of evolutionary biology." },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A provocative look at how biology and history have defined us." },
      { title: "The Bed of Procrustes", author: "Nassim Nicholas Taleb", isbn: "9780812982404", description: "A collection of philosophical and practical aphorisms by the author of The Black Swan." },
      { title: "The Book of Life", author: "Jiddu Krishnamurti", isbn: "9780060648794", description: "A collection of daily meditations on life, love, and truth by the influential spiritual teacher." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", description: "The Nobel laureate's exploration of the two systems that drive our thoughts." },
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959", description: "A concise survey of human history and the enduring themes that shape our species." }
    ]
  },
  {
    name: "RuPaul",
    slug: "rupaul",
    bio: "Drag icon, TV host, and cultural pioneer. His reading list reflects a deep commitment to self-discovery and spiritual growth.",
    image: "https://unavatar.io/twitter/RuPaul",
    category: "Culture",
    books: [
      { title: "The Four Agreements", author: "Don Miguel Ruiz", isbn: "9781878424310", description: "A practical guide to personal freedom based on ancient Toltec wisdom." },
      { title: "A Return to Love", author: "Marianne Williamson", isbn: "9780060927486", description: "A spiritual classic on the power of love and forgiveness." },
      { title: "The Power of Now", author: "Eckhart Tolle", isbn: "9781577314806", description: "A guide to spiritual enlightenment through living in the present moment." },
      { title: "Animal Farm", author: "George Orwell", isbn: "9780451526342", description: "A classic satire on totalitarism and the corrupting nature of power." },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007", description: "An allegorical novel about following your dreams and listening to your heart." },
      { title: "The Artist's Way", author: "Julia Cameron", isbn: "9781585421466", description: "A comprehensive course on discovering and recovering your creative self." },
      { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", isbn: "9780876120798", description: "A deeply spiritual memoir that was a favorite of Steve Jobs." },
      { title: "In the Realm of Hungry Ghosts", author: "Gabor Maté", isbn: "9781556438806", description: "A compassionate and scientific look at addiction and its roots in trauma." },
      { title: "The Seat of the Soul", author: "Gary Zukav", isbn: "9780671695071", description: "A journey into the evolution of human consciousness and the power of intention." },
      { title: "Conversations with God", author: "Neale Donald Walsch", isbn: "9780399142789", description: "A series of books exploring the nature of God, the universe, and our place in it." }
    ]
  },
  {
    name: "Sam Altman",
    slug: "sam-altman",
    bio: "CEO of OpenAI. His reading list focuses on the intersection of technology, humanity, and the future of intelligence.",
    image: "https://unavatar.io/twitter/sama",
    category: "Tech",
    books: [
      { title: "The Beginning of Infinity", author: "David Deutsch", isbn: "9780143121350", description: "A brilliant and mind-expanding exploration of the nature of progress and the infinite reach of human reason." },
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838", description: "A deep dive into the risks and potential strategies for human survival in the age of AGI." },
      { title: "The Making of the Atomic Bomb", author: "Richard Rhodes", isbn: "9781451677614", description: "The definitive and epic history of the Manhattan Project and the birth of the nuclear age." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's memoir of the Holocaust and his theory on finding purpose in life." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", description: "The Nobel laureate's exploration of the two systems that drive our thoughts." }
    ]
  },
  {
    name: "Vitalik Buterin",
    slug: "vitalik-buterin",
    bio: "Creator of Ethereum. A polymath who reads deeply into economics, philosophy, and decentralized systems.",
    image: "https://unavatar.io/twitter/VitalikButerin",
    category: "Tech",
    books: [
      { title: "Rationality: From AI to Zombies", author: "Eliezer Yudkowsky", isbn: "9781943482016", description: "A massive and influential collection of essays on the art of human rationality and the future of intelligence." },
      { title: "The Sovereign Individual", author: "James Dale Davidson", isbn: "9780684832722", description: "A provocative look at the future of the nation-state and the rise of the individual in the information age." },
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959", description: "A concise survey of human history and the enduring themes that shape our species." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", description: "The Nobel laureate's exploration of the two systems that drive our thoughts." }
    ]
  },
  {
    name: "Michelle Obama",
    slug: "michelle-obama",
    bio: "Former First Lady and author of Becoming. Her book picks celebrate diverse voices and stories of personal growth.",
    image: "https://unavatar.io/twitter/MichelleObama",
    category: "Culture",
    books: [
      { title: "The Light We Carry", author: "Michelle Obama", isbn: "9780593237465", description: "The former First Lady's guide to finding strength and connection in an uncertain world." },
      { title: "Song of Solomon", author: "Toni Morrison", isbn: "9781400033423", description: "A powerful and lyrical novel exploring African American identity and heritage." },
      { title: "Becoming", author: "Michelle Obama", isbn: "9781524763138", description: "A deeply personal memoir about the former First Lady's life and journey." },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504", description: "A powerful memoir of escaping a survivalist family through the pursuit of education." }
    ]
  },
  {
    name: "Satya Nadella",
    slug: "satya-nadella",
    bio: "CEO of Microsoft. Known for transforming Microsoft's culture through the philosophy of empathy and a 'learn-it-all' mindset.",
    image: "https://unavatar.io/twitter/satyanadella",
    category: "Tech",
    books: [
      { title: "Hit Refresh", author: "Satya Nadella", isbn: "9780062652508", description: "The Microsoft CEO's account of the company's transformation and the importance of empathy in leadership." },
      { title: "The Boys in the Boat", author: "Daniel James Brown", isbn: "9780143125471", description: "The incredible true story of the American rowing team that won gold at the 1936 Olympics." },
      { title: "Nonviolent Communication", author: "Marshall B. Rosenberg", isbn: "9781892005281", description: "A transformative guide to communication that fosters connection and understanding." },
      { title: "Mindset", author: "Carol S. Dweck", isbn: "9780345472328", description: "The groundbreaking book on the power of the 'growth mindset' to achieve success." }
    ]
  },
  {
    name: "Brené Brown",
    slug: "brene-brown",
    bio: "Research professor and author. Her work on vulnerability, courage, and shame has inspired millions to live more wholehearted lives.",
    image: "https://unavatar.io/twitter/BreneBrown",
    category: "Lifestyle",
    books: [
      { title: "Daring Greatly", author: "Brené Brown", isbn: "9781592408412", description: "How the courage to be vulnerable transforms the way we live, love, parent, and lead." },
      { title: "The Gifts of Imperfection", author: "Brené Brown", isbn: "9781592408412", description: "A guide to letting go of who you think you're supposed to be and embracing who you are." },
      { title: "Braving the Wilderness", author: "Brené Brown", isbn: "9780812995848", description: "The quest for true belonging and the courage to stand alone." },
      { title: "Atlas of the Heart", author: "Brené Brown", isbn: "9780399592553", description: "A map of the human experience and the language we use to navigate our emotions." }
    ]
  },
  {
    name: "Andrew Huberman",
    slug: "andrew-huberman",
    bio: "Neuroscientist and host of the Huberman Lab podcast. Credits books with helping him understand the biological basis of behavior.",
    image: "https://unavatar.io/twitter/hubermanlab",
    category: "Science",
    books: [
      { title: "Deep Work", author: "Cal Newport", isbn: "9781455586691", description: "How to cultivate intense focus and eliminate distractions in a noisy world." },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616", description: "A fascinating look at the science and art of breathing correctly for health and longevity." },
      { title: "Why We Sleep", author: "Matthew Walker", isbn: "9781501144317", description: "A neuroscientist's exploration of the vital importance of sleep for our physical and mental health." },
      { title: "The 4-Hour Body", author: "Tim Ferriss", isbn: "9780307463630", description: "A guide to hacking your body for optimal performance and health." }
    ]
  },
  {
    name: "David Goggins",
    slug: "david-goggins",
    bio: "Retired Navy SEAL and endurance athlete. Known for his incredible mental toughness and physical discipline.",
    image: "https://unavatar.io/twitter/davidgoggins",
    category: "Lifestyle",
    books: [
      { title: "Can't Hurt Me", author: "David Goggins", isbn: "9781544512280", description: "The incredible story of a man who transformed himself from overweight and insecure into a Navy SEAL." },
      { title: "Living with a SEAL", author: "Jesse Itzler", isbn: "9781455534678", description: "A hilarious and inspiring account of a businessman who hires David Goggins to live with him for a month." },
      { title: "The Way of the SEAL", author: "Mark Divine", isbn: "9781621451099", description: "How to develop the mental toughness and leadership skills of a Navy SEAL." }
    ]
  },
  {
    name: "Ryan Holiday",
    slug: "ryan-holiday",
    bio: "Author and modern stoic. His books and newsletters have popularized ancient philosophy for a modern audience.",
    image: "https://unavatar.io/twitter/RyanHoliday",
    category: "Authors",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", description: "The private reflections of the Roman Emperor on stoicism and living a virtuous life." },
      { title: "Letters from a Stoic", author: "Seneca", isbn: "9780140442106", description: "A collection of practical and philosophical letters on how to live a meaningful life." },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352", description: "How ancient stoic philosophy can help us turn challenges into opportunities." },
      { title: "Stillness Is the Key", author: "Ryan Holiday", isbn: "9780525538585", description: "How to find clarity and peace of mind in a noisy and chaotic world." }
    ]
  },
  {
    name: "Simon Sinek",
    slug: "simon-sinek",
    bio: "Author and speaker on leadership. Known for his work on the 'Golden Circle' and the power of starting with 'Why'.",
    image: "https://unavatar.io/twitter/simonsinek",
    category: "Business",
    books: [
      { title: "Start with Why", author: "Simon Sinek", isbn: "9781591846444", description: "How great leaders inspire everyone to take action by starting with 'why'." },
      { title: "Leaders Eat Last", author: "Simon Sinek", isbn: "9781591845324", description: "Why some teams pull together and others don't, and the role of leadership in creating safety." },
      { title: "The Infinite Game", author: "Simon Sinek", isbn: "9780735213500", description: "How to lead with a long-term mindset in a world of constant change." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's memoir of the Holocaust and his theory on finding purpose in life." }
    ]
  },
  {
    name: "Indra Nooyi",
    slug: "indra-nooyi",
    bio: "Former CEO of PepsiCo. A trailblazing leader who emphasizes the importance of purpose and lifelong learning.",
    image: "https://unavatar.io/twitter/IndraNooyi",
    category: "Business",
    books: [
      { title: "My Life in Full", author: "Indra Nooyi", isbn: "9780593191798", description: "The former PepsiCo CEO's memoir of her life, career, and the importance of family and community." },
      { title: "The Road to Character", author: "David Brooks", isbn: "9780812983418", description: "An exploration of the lives of historical figures and the virtues that shaped their characters." },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992", description: "Why some companies make the leap and others don't, based on years of research." },
      { title: "The Gene", author: "Siddhartha Mukherjee", isbn: "9781476733500", description: "A comprehensive and engaging history of the gene and its impact on our understanding of life." }
    ]
  },
  {
    name: "Malcolm Gladwell",
    slug: "malcolm-gladwell",
    bio: "Journalist and author. Known for his unique ability to synthesize social science research into compelling narratives.",
    image: "https://unavatar.io/twitter/Gladwell",
    category: "Authors",
    books: [
      { title: "The Tipping Point", author: "Malcolm Gladwell", isbn: "9780316346627", description: "How small changes can have a huge impact on our lives and the world." },
      { title: "Outliers", author: "Malcolm Gladwell", isbn: "9780316017930", description: "Why some people succeed far more than others and the hidden factors that contribute to success." },
      { title: "Talking to Strangers", author: "Malcolm Gladwell", isbn: "9780316478526", description: "Why we are so bad at understanding people we don't know and the consequences of our misinterpretations." },
      { title: "Blink", author: "Malcolm Gladwell", isbn: "9780316172325", description: "The power of thinking without thinking and how our snap judgments shape our lives." }
    ]
  },
  {
    name: "Jordan Peterson",
    slug: "jordan-peterson",
    bio: "Clinical psychologist and author. His lectures and books on psychology, mythology, and responsibility have gained global attention.",
    image: "https://unavatar.io/twitter/jordanbpeterson",
    category: "Culture",
    books: [
      { title: "12 Rules for Life", author: "Jordan B. Peterson", isbn: "9780345816022", description: "An antidote to chaos: twelve practical and profound rules for living a meaningful life." },
      { title: "Maps of Meaning", author: "Jordan B. Peterson", isbn: "9780415922227", description: "A complex and ambitious exploration of the architecture of belief and the role of mythology in human life." },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295", description: "A psychiatrist's memoir of the Holocaust and his theory on finding purpose in life." },
      { title: "The Gulag Archipelago", author: "Aleksandr Solzhenitsyn", isbn: "9780061253805", description: "The definitive and harrowing account of the Soviet prison system." }
    ]
  },
  {
    name: "Arianna Huffington",
    slug: "arianna-huffington",
    bio: "Founder of The Huffington Post and Thrive Global. A vocal advocate for well-being and the importance of sleep in leadership.",
    image: "https://unavatar.io/twitter/ariannahuff",
    category: "Culture",
    books: [
      { title: "The Sleep Revolution", author: "Arianna Huffington", isbn: "9781101904008", description: "How sleep deprivation is damaging our health and happiness, and how to fix it." },
      { title: "Thrive", author: "Arianna Huffington", isbn: "9780804140843", description: "A guide to redefining success and living a more meaningful and well-lived life." },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", description: "The private reflections of the Roman Emperor on stoicism and living a virtuous life." },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007", description: "An allegorical novel about following your dreams and listening to your heart." }
    ]
  },
  {
    name: "Jensen Huang",
    slug: "jensen-huang",
    bio: "Co-founder and CEO of NVIDIA. A visionary leader at the forefront of the AI and graphics processing revolution.",
    image: "https://unavatar.io/twitter/jensenhuang",
    category: "Tech",
    books: [
      { title: "The Lean Startup", author: "Eric Ries", isbn: "9780307887894", description: "How constant innovation creates radically successful businesses." },
      { title: "Only the Paranoid Survive", author: "Andrew S. Grove", isbn: "9780385483827", description: "How to navigate strategic inflection points in business." },
      { title: "Built to Last", author: "Jim Collins", isbn: "9780060516406", description: "A study of visionary companies that have stood the test of time." },
      { title: "High Output Management", author: "Andrew S. Grove", isbn: "9780679762881", description: "The classic guide to management and productivity from the former Intel CEO." }
    ]
  },
  {
    name: "Gwyneth Paltrow",
    slug: "gwyneth-paltrow",
    bio: "Actress and founder of Goop. Her lifestyle brand has become a major influence in wellness, health, and modern culture.",
    image: "https://unavatar.io/twitter/GwynethPaltrow",
    category: "Lifestyle",
    books: [
      { title: "The Clean Plate", author: "Gwyneth Paltrow", isbn: "9781538745236", description: "A collection of clean and healthy recipes for wellness and vitality." },
      { title: "It's All Good", author: "Gwyneth Paltrow", isbn: "9781455522712", description: "A cookbook focused on delicious and nutritious recipes that make you feel great." },
      { title: "A New Earth", author: "Eckhart Tolle", isbn: "9780452289581", description: "A guide to spiritual awakening and finding your true purpose in life." },
      { title: "The Year of Magical Thinking", author: "Joan Didion", isbn: "9781400078431", description: "A moving and profound memoir of grief and loss." }
    ]
  },
  {
    name: "Margaret Atwood",
    slug: "margaret-atwood",
    bio: "Renowned author and poet. Her dystopian fiction and literary criticism explore themes of power, gender, and the future.",
    image: "https://unavatar.io/twitter/MargaretAtwood",
    category: "Authors",
    books: [
      { title: "The Handmaid's Tale", author: "Margaret Atwood", isbn: "9780385490818", description: "A chillingly relevant dystopian novel about a patriarchal society." },
      { title: "The Testaments", author: "Margaret Atwood", isbn: "9780385543781", description: "The long-awaited sequel to The Handmaid's Tale, exploring the inner workings of Gilead." },
      { title: "1984", author: "George Orwell", isbn: "9780451524935", description: "A terrifying vision of a totalitarian future where truth is a casualty of power." },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524", description: "A haunting vision of a future where humanity is sacrificed for stability and pleasure." }
    ]
  },
  {
    name: "Yuval Noah Harari",
    slug: "yuval-noah-harari",
    bio: "Historian and author. His books Sapiens and Homo Deus have become global phenomena, exploring the past and future of humanity.",
    image: "https://unavatar.io/twitter/harari_yuval",
    category: "Authors",
    books: [
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097", description: "A provocative look at how biology and history have defined us." },
      { title: "Homo Deus", author: "Yuval Noah Harari", isbn: "9780062464316", description: "A fascinating exploration of the future of humanity and our evolution into a new species." },
      { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", isbn: "9780525512172", description: "An insightful look at the most pressing issues facing our world today." },
      { title: "Guns, Germs, and Steel", author: "Jared Diamond", isbn: "9780393317558", description: "The definitive history of human societies and the factors that shaped their development." }
    ]
  },
  {
    name: "Peter Thiel",
    slug: "peter-thiel",
    bio: "Venture capitalist and author. A contrarian thinker who emphasizes the importance of vertical progress and building monopolies.",
    image: "https://unavatar.io/twitter/peterthiel",
    category: "Business",
    books: [
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298", description: "How to build companies that create new things, featuring contrarian insights from the PayPal co-founder." },
      { title: "The Sovereign Individual", author: "James Dale Davidson", isbn: "9780684832722", description: "A provocative look at the future of the nation-state and the rise of the individual in the information age." },
      { title: "Things Hidden Since the Foundation of the World", author: "René Girard", isbn: "9780804722155", description: "A complex and ambitious exploration of the nature of human desire and the role of sacrifice in culture." },
      { title: "The Diamond Age", author: "Neal Stephenson", isbn: "9780553374575", description: "A visionary science fiction novel exploring nanotechnology and the future of education." }
    ]
  },
  {
    name: "Sheryl Sandberg",
    slug: "sheryl-sandberg",
    bio: "Former COO of Meta and founder of LeanIn.Org. An advocate for women in leadership and resilience in the face of adversity.",
    image: "https://unavatar.io/twitter/sherylsandberg",
    category: "Business",
    books: [
      { title: "Lean In", author: "Sheryl Sandberg", isbn: "9780385349949", description: "The landmark book on women, work, and the will to lead." },
      { title: "Option B", author: "Sheryl Sandberg", isbn: "9781524732684", description: "How to face adversity, build resilience, and find joy again after a major life setback." },
      { title: "The Road to Character", author: "David Brooks", isbn: "9780812983418", description: "An exploration of the lives of historical figures and the virtues that shaped their characters." },
      { title: "Now, Discover Your Strengths", author: "Marcus Buckingham", isbn: "9780743201148", description: "A guide to identifying and developing your natural talents for success." }
    ]
  },
  {
    name: "Chris Anderson",
    slug: "chris-anderson",
    bio: "Head of TED. Known for his work in transforming TED into a global platform for ideas worth spreading.",
    image: "https://unavatar.io/twitter/TEDchris",
    category: "Tech",
    books: [
      { title: "TED Talks", author: "Chris Anderson", isbn: "9780544634496", description: "The official TED guide to public speaking, sharing the secrets of the world's most successful presenters." },
      { title: "The Long Tail", author: "Chris Anderson", isbn: "9781401309664", description: "Why the future of business is selling less of more, and the rise of the niche market." },
      { title: "Free", author: "Chris Anderson", isbn: "9781401322861", description: "The future of a radical price and how companies can thrive by giving things away." },
      { title: "Makers", author: "Chris Anderson", isbn: "9780307951038", description: "The new industrial revolution and the rise of the desktop manufacturing era." }
    ]
  }
];
