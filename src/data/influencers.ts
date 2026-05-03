export interface Book {
  title: string;
  author: string;
  isbn?: string;
  rating?: number;
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
      { title: "Business Adventures", author: "John Brooks", isbn: "9780812969184" },
      { title: "The Better Angels of Our Nature", author: "Steven Pinker", isbn: "9780143122012" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Spy and the Traitor", author: "Ben Macintyre", isbn: "9781101904213" },
      { title: "Range", author: "David Epstein", isbn: "9780735214484" },
      { title: "How to Avoid a Climate Disaster", author: "Bill Gates", isbn: "9780385546133" },
      { title: "Factfulness", author: "Hans Rosling", isbn: "9781250107817" },
      { title: "Enlightenment Now", author: "Steven Pinker", isbn: "9780143111382" },
      { title: "The Rosie Project", author: "Graeme Simsion", isbn: "9781476729091" },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504" }
    ]
  },
  {
    name: "Elon Musk",
    slug: "elon-musk",
    bio: "CEO of Tesla and SpaceX. Credits books with teaching him rocket science and shaping his vision for humanity's future.",
    image: "https://unavatar.io/twitter/elonmusk",
    category: "Tech",
    books: [
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803" },
      { title: "Foundation", author: "Isaac Asimov", isbn: "9780553293357" },
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298" },
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838" },
      { title: "Structures: Or Why Things Don't Fall Down", author: "J.E. Gordon", isbn: "9780306812835" },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien", isbn: "9780618640157" },
      { title: "Einstein: His Life and Universe", author: "Walter Isaacson", isbn: "9780743264747" },
      { title: "Merchants of Doubt", author: "Naomi Oreskes", isbn: "9781608193943" },
      { title: "The Moon Is a Harsh Mistress", author: "Robert A. Heinlein", isbn: "9780312863555" },
      { title: "Life 3.0", author: "Max Tegmark", isbn: "9781101946596" }
    ]
  },
  {
    name: "Oprah Winfrey",
    slug: "oprah-winfrey",
    bio: "Media mogul and founder of Oprah's Book Club, one of the most influential book recommendation platforms in the world.",
    image: "https://unavatar.io/twitter/Oprah",
    category: "Culture",
    books: [
      { title: "A New Earth", author: "Eckhart Tolle", isbn: "9780452289581" },
      { title: "The Underground Railroad", author: "Colson Whitehead", isbn: "9780385542364" },
      { title: "Becoming", author: "Michelle Obama", isbn: "9781524763138" },
      { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251922" },
      { title: "The Covenant of Water", author: "Abraham Verghese", isbn: "9780802162175" },
      { title: "The Color Purple", author: "Alice Walker", isbn: "9780156028356" },
      { title: "An American Marriage", author: "Tayari Jones", isbn: "9781616208776" },
      { title: "Beloved", author: "Toni Morrison", isbn: "9781400033416" },
      { title: "Wild", author: "Cheryl Strayed", isbn: "9780307476074" },
      { title: "The Sun Does Shine", author: "Anthony Ray Hinton", isbn: "9781250309471" }
    ]
  },
  {
    name: "Barack Obama",
    slug: "barack-obama",
    bio: "44th President of the United States. Shares annual favorite books lists spanning literary fiction, history, and journalism.",
    image: "https://unavatar.io/twitter/BarackObama",
    category: "Culture",
    books: [
      { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" },
      { title: "The Power Broker", author: "Robert Caro", isbn: "9780394720241" },
      { title: "Team of Rivals", author: "Doris Kearns Goodwin", isbn: "9780743270755" },
      { title: "The Wager", author: "David Grann", isbn: "9780385534260" },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504" },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030" },
      { title: "Beloved", author: "Toni Morrison", isbn: "9781400033416" },
      { title: "Lincoln in the Bardo", author: "George Saunders", isbn: "9780812985405" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" }
    ]
  },
  {
    name: "Warren Buffett",
    slug: "warren-buffett",
    bio: "The Oracle of Omaha. Spends 80% of his day reading and credits compounding knowledge as his greatest investment.",
    image: "https://unavatar.io/twitter/WarrenBuffett",
    category: "Business",
    books: [
      { title: "The Intelligent Investor", author: "Benjamin Graham", isbn: "9780060555665" },
      { title: "Security Analysis", author: "Benjamin Graham", isbn: "9780071592536" },
      { title: "Poor Charlie's Almanack", author: "Charles T. Munger", isbn: "9781578645015" },
      { title: "The Outsiders", author: "William Thorndike, Jr.", isbn: "9781422162675" },
      { title: "The Most Important Thing", author: "Howard Marks", isbn: "9780231153683" },
      { title: "Business Adventures", author: "John Brooks", isbn: "9780812969184" },
      { title: "Common Stocks and Uncommon Profits", author: "Philip Fisher", isbn: "9780471445500" },
      { title: "The Essays of Warren Buffett", author: "Lawrence Cunningham", isbn: "9781611637588" },
      { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910" },
      { title: "Tap Dancing to Work", author: "Carol Loomis", isbn: "9781591846215" }
    ]
  },
  {
    name: "Tim Ferriss",
    slug: "tim-ferriss",
    bio: "Author of The 4-Hour Work Week. His podcast has aggregated thousands of book recommendations from world-class performers.",
    image: "https://unavatar.io/twitter/tferriss",
    category: "Business",
    books: [
      { title: "The 80/20 Principle", author: "Richard Koch", isbn: "9780385491747" },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023" },
      { title: "Influence", author: "Robert Cialdini", isbn: "9780062937650" },
      { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", isbn: "9780062273208" },
      { title: "Vagabonding", author: "Rolf Potts", isbn: "9780812992182" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352" },
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849" }
    ]
  },
  {
    name: "Jeff Bezos",
    slug: "jeff-bezos",
    bio: "Founder of Amazon. Known for his voracious reading habit and sending books to his executive team as required reading.",
    image: "https://unavatar.io/twitter/JeffBezos",
    category: "Tech",
    books: [
      { title: "Built to Last", author: "Jim Collins", isbn: "9780060516406" },
      { title: "Creation", author: "Steve Grand", isbn: "9780674011137" },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242" },
      { title: "Sam Walton: Made in America", author: "Sam Walton", isbn: "9780553562835" },
      { title: "The Goal", author: "Eliyahu M. Goldratt", isbn: "9780884271956" },
      { title: "The Remains of the Day", author: "Kazuo Ishiguro", isbn: "9780679731726" },
      { title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", isbn: "9780201835953" },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992" },
      { title: "The Black Swan", author: "Nassim Nicholas Taleb", isbn: "9780812973815" },
      { title: "Lean Thinking", author: "James P. Womack", isbn: "9780743249270" }
    ]
  },
  {
    name: "Mark Zuckerberg",
    slug: "mark-zuckerberg",
    bio: "CEO of Meta. Ran a Year of Books challenge reading a new book every two weeks and sharing picks with millions.",
    image: "https://unavatar.io/twitter/finkd",
    category: "Tech",
    books: [
      { title: "The Muqaddimah", author: "Ibn Khaldun", isbn: "9780691166285" },
      { title: "The New Jim Crow", author: "Michelle Alexander", isbn: "9781595588609" },
      { title: "Why Nations Fail", author: "Daron Acemoglu", isbn: "9780307719225" },
      { title: "The Rational Optimist", author: "Matt Ridley", isbn: "9780061452062" },
      { title: "Portfolios of the Poor", author: "Daryl Collins", isbn: "9780691148199" },
      { title: "The End of Power", author: "Moisés Naím", isbn: "9780465065691" },
      { title: "Creativity, Inc.", author: "Ed Catmull", isbn: "9780812993011" },
      { title: "The Three-Body Problem", author: "Cixin Liu", isbn: "9780765382030" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Structure of Scientific Revolutions", author: "Thomas S. Kuhn", isbn: "9780226458120" }
    ]
  },
  {
    name: "Reese Witherspoon",
    slug: "reese-witherspoon",
    bio: "Academy Award-winning actress and founder of Reese's Book Club, turning countless novels into bestsellers and film adaptations.",
    image: "https://unavatar.io/twitter/ReeseW",
    category: "Culture",
    books: [
      { title: "Where the Crawdads Sing", author: "Delia Owens", isbn: "9780735219106" },
      { title: "Little Fires Everywhere", author: "Celeste Ng", isbn: "9780735224315" },
      { title: "Wild", author: "Cheryl Strayed", isbn: "9780307476074" },
      { title: "Daisy Jones & The Six", author: "Taylor Jenkins Reid", isbn: "9781524798628" },
      { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", isbn: "9780735220690" },
      { title: "The Last Letter from Your Lover", author: "Jojo Moyes", isbn: "9780143121107" },
      { title: "Such a Fun Age", author: "Kiley Reid", isbn: "9780525541905" },
      { title: "Malibu Rising", author: "Taylor Jenkins Reid", isbn: "9781524798659" },
      { title: "The Midnight Library", author: "Matt Haig", isbn: "9780525559474" },
      { title: "Lessons in Chemistry", author: "Bonnie Garmus", isbn: "9780385547345" }
    ]
  },
  {
    name: "Lex Fridman",
    slug: "lex-fridman",
    bio: "AI researcher and podcaster. His reading list spans existential philosophy, classic literature, and cutting-edge science.",
    image: "https://unavatar.io/twitter/lexfridman",
    category: "Science",
    books: [
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", isbn: "9780374528379" },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "Dune", author: "Frank Herbert", isbn: "9780441013593" },
      { title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9780486415871" },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "The Stranger", author: "Albert Camus", isbn: "9780679720201" },
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849" },
      { title: "The Master and Margarita", author: "Mikhail Bulgakov", isbn: "9780141180144" }
    ]
  },
  {
    name: "Emma Watson",
    slug: "emma-watson",
    bio: "Actress and UN Women Goodwill Ambassador. Founded the feminist book club Our Shared Shelf, championing diverse voices.",
    image: "https://unavatar.io/twitter/EmmaWatson",
    category: "Culture",
    books: [
      { title: "Just Kids", author: "Patti Smith", isbn: "9780060936228" },
      { title: "My Life on the Road", author: "Gloria Steinem", isbn: "9780679456209" },
      { title: "The Argonauts", author: "Maggie Nelson", isbn: "9781555977351" },
      { title: "Persepolis", author: "Marjane Satrapi", isbn: "9780375714573" },
      { title: "Beloved", author: "Toni Morrison", isbn: "9781400033416" },
      { title: "The Color Purple", author: "Alice Walker", isbn: "9780156028356" },
      { title: "Why I'm No Longer Talking to White People About Race", author: "Reni Eddo-Lodge", isbn: "9781635572957" },
      { title: "The Handmaid's Tale", author: "Margaret Atwood", isbn: "9780385490818" },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011" },
      { title: "Mom & Me & Mom", author: "Maya Angelou", isbn: "9780812987683" }
    ]
  },
  {
    name: "Stephen King",
    slug: "stephen-king",
    bio: "The King of Horror and one of the most prolific authors alive. Reads 70-80 books a year and shares recommendations constantly.",
    image: "https://unavatar.io/twitter/StephenKing",
    category: "Authors",
    books: [
      { title: "Lord of the Flies", author: "William Golding", isbn: "9780399501487" },
      { title: "Bleak House", author: "Charles Dickens", isbn: "9780141439723" },
      { title: "Blood Meridian", author: "Cormac McCarthy", isbn: "9780679728757" },
      { title: "Invisible Man", author: "Ralph Ellison", isbn: "9780679732761" },
      { title: "The Haunting of Hill House", author: "Shirley Jackson", isbn: "9780143039983" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Misery", author: "Stephen King", isbn: "9781501143106" },
      { title: "Watership Down", author: "Richard Adams", isbn: "9780743277709" },
      { title: "The Old Man and the Sea", author: "Ernest Hemingway", isbn: "9780684801223" },
      { title: "Shirley Jackson: A Rather Haunted Life", author: "Ruth Franklin", isbn: "9780871403131" }
    ]
  },
  {
    name: "Neil deGrasse Tyson",
    slug: "neil-degrasse-tyson",
    bio: "Astrophysicist and science communicator. His reading list is a masterclass in scientific literacy and critical thinking.",
    image: "https://unavatar.io/twitter/neiltyson",
    category: "Science",
    books: [
      { title: "Gulliver's Travels", author: "Jonathan Swift", isbn: "9780141439495" },
      { title: "The Origin of Species", author: "Charles Darwin", isbn: "9780451529060" },
      { title: "Isaac Newton", author: "James Gleick", isbn: "9781400032952" },
      { title: "The Age of Reason", author: "Thomas Paine", isbn: "9780486433936" },
      { title: "On the Nature of Things", author: "Lucretius", isbn: "9780140447965" },
      { title: "The Art of War", author: "Sun Tzu", isbn: "9781599869773" },
      { title: "The Prince", author: "Niccolò Machiavelli", isbn: "9780486272740" },
      { title: "A Short History of Nearly Everything", author: "Bill Bryson", isbn: "9780767908184" },
      { title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434" },
      { title: "The Wealth of Nations", author: "Adam Smith", isbn: "9780553585971" }
    ]
  },
  {
    name: "Steve Jobs",
    slug: "steve-jobs",
    bio: "Co-founder of Apple. His eclectic reading — from Zen Buddhism to business strategy — shaped the philosophy of Apple's design.",
    image: "https://unavatar.io/wikipedia/Steve_Jobs",
    category: "Tech",
    books: [
      { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", isbn: "9780876120798" },
      { title: "Be Here Now", author: "Ram Dass", isbn: "9780517543054" },
      { title: "Diet for a Small Planet", author: "Frances Moore Lappé", isbn: "9780345321206" },
      { title: "Only the Paranoid Survive", author: "Andrew S. Grove", isbn: "9780385483827" },
      { title: "The Innovator's Dilemma", author: "Clayton Christensen", isbn: "9780062060242" },
      { title: "Zen Mind, Beginner's Mind", author: "Shunryu Suzuki", isbn: "9781590308493" },
      { title: "Moby Dick", author: "Herman Melville", isbn: "9780142437247" },
      { title: "King Lear", author: "William Shakespeare", isbn: "9780743482769" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Atlas Shrugged", author: "Ayn Rand", isbn: "9780451191144" }
    ]
  },
  {
    name: "Richard Branson",
    slug: "richard-branson",
    bio: "Founder of the Virgin Group. An avid reader who believes books are the best way to learn from others' adventures.",
    image: "https://unavatar.io/twitter/richardbranson",
    category: "Business",
    books: [
      { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", isbn: "9780345514400" },
      { title: "Long Walk to Freedom", author: "Nelson Mandela", isbn: "9780316548182" },
      { title: "Stalingrad", author: "Antony Beevor", isbn: "9780140284584" },
      { title: "Wild Swans", author: "Jung Chang", isbn: "9780743246989" },
      { title: "A Brief History of Time", author: "Stephen Hawking", isbn: "9780553380163" },
      { title: "The Tipping Point", author: "Malcolm Gladwell", isbn: "9780316346627" },
      { title: "Mandela's Way", author: "Richard Stengel", isbn: "9780307460691" },
      { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910" },
      { title: "The Art of Happiness", author: "Dalai Lama", isbn: "9781573227544" },
      { title: "Steve Jobs", author: "Walter Isaacson", isbn: "9781451648539" }
    ]
  },
  {
    name: "Malala Yousafzai",
    slug: "malala-yousafzai",
    bio: "Nobel Peace Prize laureate and education activist. A passionate reader who champions stories of resilience and justice.",
    image: "https://unavatar.io/twitter/Malala",
    category: "Culture",
    books: [
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007" },
      { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", isbn: "9781594489501" },
      { title: "Anne of Green Gables", author: "L.M. Montgomery", isbn: "9781770497313" },
      { title: "The Breadwinner", author: "Deborah Ellis", isbn: "9781554987931" },
      { title: "I Am Malala", author: "Malala Yousafzai", isbn: "9780316322423" },
      { title: "The Kite Runner", author: "Khaled Hosseini", isbn: "9781594631931" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780060935467" },
      { title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011" },
      { title: "The Diary of a Young Girl", author: "Anne Frank", isbn: "9780553296983" },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504" }
    ]
  },
  {
    name: "Ray Dalio",
    slug: "ray-dalio",
    bio: "Founder of Bridgewater Associates and author of Principles. Approaches reading as a systematic tool for understanding reality.",
    image: "https://unavatar.io/twitter/RayDalio",
    category: "Business",
    books: [
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959" },
      { title: "River Out of Eden", author: "Richard Dawkins", isbn: "9780465069903" },
      { title: "The Hero with a Thousand Faces", author: "Joseph Campbell", isbn: "9781577315933" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Changing World Order", author: "Ray Dalio", isbn: "9781982160272" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" },
      { title: "The Fourth Turning", author: "William Strauss", isbn: "9780767900461" },
      { title: "Einstein's Mistakes", author: "Hans C. Ohanian", isbn: "9780393337686" },
      { title: "The Spiritual Brain", author: "Mario Beauregard", isbn: "9780061625985" },
      { title: "Genome", author: "Matt Ridley", isbn: "9780060932909" }
    ]
  },
  {
    name: "Joe Rogan",
    slug: "joe-rogan",
    bio: "Podcaster and UFC commentator. His show has made obscure books into bestsellers overnight through passionate discussions.",
    image: "https://unavatar.io/twitter/joerogan",
    category: "Culture",
    books: [
      { title: "The Book of Five Rings", author: "Miyamoto Musashi", isbn: "9781590302484" },
      { title: "Empire of the Summer Moon", author: "S.C. Gwynne", isbn: "9781416591054" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "Tribe", author: "Sebastian Junger", isbn: "9781455566389" },
      { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023" },
      { title: "Endure", author: "Alex Hutchinson", isbn: "9780062499981" },
      { title: "Can't Hurt Me", author: "David Goggins", isbn: "9781544512280" },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352" }
    ]
  },
  {
    name: "Naval Ravikant",
    slug: "naval-ravikant",
    bio: "AngelList co-founder and philosopher-investor. His reading list blends ancient wisdom with modern science and economics.",
    image: "https://unavatar.io/twitter/naval",
    category: "Tech",
    books: [
      { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780553208849" },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "Poor Charlie's Almanack", author: "Charles T. Munger", isbn: "9781578645015" },
      { title: "Skin in the Game", author: "Nassim Nicholas Taleb", isbn: "9780425284643" },
      { title: "The Origin of Species", author: "Charles Darwin", isbn: "9780451529060" },
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "The Bed of Procrustes", author: "Nassim Nicholas Taleb", isbn: "9780812982404" },
      { title: "The Book of Life", author: "Jiddu Krishnamurti", isbn: "9780060648794" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" },
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959" }
    ]
  },
  {
    name: "RuPaul",
    slug: "rupaul",
    bio: "Drag icon, TV host, and cultural pioneer. His reading list reflects a deep commitment to self-discovery and spiritual growth.",
    image: "https://unavatar.io/twitter/RuPaul",
    category: "Culture",
    books: [
      { title: "The Four Agreements", author: "Don Miguel Ruiz", isbn: "9781878424310" },
      { title: "A Return to Love", author: "Marianne Williamson", isbn: "9780060927486" },
      { title: "The Power of Now", author: "Eckhart Tolle", isbn: "9781577314806" },
      { title: "Animal Farm", author: "George Orwell", isbn: "9780451526342" },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007" },
      { title: "The Artist's Way", author: "Julia Cameron", isbn: "9781585421466" },
      { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", isbn: "9780876120798" },
      { title: "In the Realm of Hungry Ghosts", author: "Gabor Maté", isbn: "9781556438806" },
      { title: "The Seat of the Soul", author: "Gary Zukav", isbn: "9780671695071" },
      { title: "Conversations with God", author: "Neale Donald Walsch", isbn: "9780399142789" }
    ]
  },
  {
    name: "Sam Altman",
    slug: "sam-altman",
    bio: "CEO of OpenAI. His reading list focuses on the intersection of technology, humanity, and the future of intelligence.",
    image: "https://unavatar.io/twitter/sama",
    category: "Tech",
    books: [
      { title: "The Beginning of Infinity", author: "David Deutsch", isbn: "9780143121350" },
      { title: "Superintelligence", author: "Nick Bostrom", isbn: "9780198739838" },
      { title: "The Making of the Atomic Bomb", author: "Richard Rhodes", isbn: "9781451677614" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" }
    ]
  },
  {
    name: "Vitalik Buterin",
    slug: "vitalik-buterin",
    bio: "Creator of Ethereum. A polymath who reads deeply into economics, philosophy, and decentralized systems.",
    image: "https://unavatar.io/twitter/VitalikButerin",
    category: "Tech",
    books: [
      { title: "Rationality: From AI to Zombies", author: "Eliezer Yudkowsky", isbn: "9781943482016" },
      { title: "The Sovereign Individual", author: "James Dale Davidson", isbn: "9780684832722" },
      { title: "The Lessons of History", author: "Will & Ariel Durant", isbn: "9781439149959" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557" }
    ]
  },
  {
    name: "Michelle Obama",
    slug: "michelle-obama",
    bio: "Former First Lady and author of Becoming. Her book picks celebrate diverse voices and stories of personal growth.",
    image: "https://unavatar.io/twitter/MichelleObama",
    category: "Culture",
    books: [
      { title: "The Light We Carry", author: "Michelle Obama", isbn: "9780593237465" },
      { title: "Song of Solomon", author: "Toni Morrison", isbn: "9781400033423" },
      { title: "Becoming", author: "Michelle Obama", isbn: "9781524763138" },
      { title: "Educated", author: "Tara Westover", isbn: "9780399590504" }
    ]
  },
  {
    name: "Satya Nadella",
    slug: "satya-nadella",
    bio: "CEO of Microsoft. Known for transforming Microsoft's culture through the philosophy of empathy and a 'learn-it-all' mindset.",
    image: "https://unavatar.io/twitter/satyanadella",
    category: "Tech",
    books: [
      { title: "Hit Refresh", author: "Satya Nadella", isbn: "9780062652508" },
      { title: "The Boys in the Boat", author: "Daniel James Brown", isbn: "9780143125471" },
      { title: "Nonviolent Communication", author: "Marshall B. Rosenberg", isbn: "9781892005281" },
      { title: "Mindset", author: "Carol S. Dweck", isbn: "9780345472328" }
    ]
  },
  {
    name: "Brené Brown",
    slug: "brene-brown",
    bio: "Research professor and author. Her work on vulnerability, courage, and shame has inspired millions to live more wholehearted lives.",
    image: "https://unavatar.io/twitter/BreneBrown",
    category: "Lifestyle",
    books: [
      { title: "Daring Greatly", author: "Brené Brown", isbn: "9781592408412" },
      { title: "The Gifts of Imperfection", author: "Brené Brown", isbn: "9781592408412" },
      { title: "Braving the Wilderness", author: "Brené Brown", isbn: "9780812995848" },
      { title: "Atlas of the Heart", author: "Brené Brown", isbn: "9780399592553" }
    ]
  },
  {
    name: "Andrew Huberman",
    slug: "andrew-huberman",
    bio: "Neuroscientist and host of the Huberman Lab podcast. Credits books with helping him understand the biological basis of behavior.",
    image: "https://unavatar.io/twitter/hubermanlab",
    category: "Science",
    books: [
      { title: "Deep Work", author: "Cal Newport", isbn: "9781455586691" },
      { title: "Breath", author: "James Nestor", isbn: "9780735213616" },
      { title: "Why We Sleep", author: "Matthew Walker", isbn: "9781501144317" },
      { title: "The 4-Hour Body", author: "Tim Ferriss", isbn: "9780307463630" }
    ]
  },
  {
    name: "David Goggins",
    slug: "david-goggins",
    bio: "Retired Navy SEAL and endurance athlete. Known for his incredible mental toughness and physical discipline.",
    image: "https://unavatar.io/twitter/davidgoggins",
    category: "Lifestyle",
    books: [
      { title: "Can't Hurt Me", author: "David Goggins", isbn: "9781544512280" },
      { title: "Living with a SEAL", author: "Jesse Itzler", isbn: "9781455534678" },
      { title: "The Way of the SEAL", author: "Mark Divine", isbn: "9781621451099" }
    ]
  },
  {
    name: "Ryan Holiday",
    slug: "ryan-holiday",
    bio: "Author and modern stoic. His books and newsletters have popularized ancient philosophy for a modern audience.",
    image: "https://unavatar.io/twitter/RyanHoliday",
    category: "Authors",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "Letters from a Stoic", author: "Seneca", isbn: "9780140442106" },
      { title: "The Obstacle Is the Way", author: "Ryan Holiday", isbn: "9781591846352" },
      { title: "Stillness Is the Key", author: "Ryan Holiday", isbn: "9780525538585" }
    ]
  },
  {
    name: "Simon Sinek",
    slug: "simon-sinek",
    bio: "Author and speaker on leadership. Known for his work on the 'Golden Circle' and the power of starting with 'Why'.",
    image: "https://unavatar.io/twitter/simonsinek",
    category: "Business",
    books: [
      { title: "Start with Why", author: "Simon Sinek", isbn: "9781591846444" },
      { title: "Leaders Eat Last", author: "Simon Sinek", isbn: "9781591845324" },
      { title: "The Infinite Game", author: "Simon Sinek", isbn: "9780735213500" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" }
    ]
  },
  {
    name: "Indra Nooyi",
    slug: "indra-nooyi",
    bio: "Former CEO of PepsiCo. A trailblazing leader who emphasizes the importance of purpose and lifelong learning.",
    image: "https://unavatar.io/twitter/IndraNooyi",
    category: "Business",
    books: [
      { title: "My Life in Full", author: "Indra Nooyi", isbn: "9780593191798" },
      { title: "The Road to Character", author: "David Brooks", isbn: "9780812983418" },
      { title: "Good to Great", author: "Jim Collins", isbn: "9780066620992" },
      { title: "The Gene", author: "Siddhartha Mukherjee", isbn: "9781476733500" }
    ]
  },
  {
    name: "Malcolm Gladwell",
    slug: "malcolm-gladwell",
    bio: "Journalist and author. Known for his unique ability to synthesize social science research into compelling narratives.",
    image: "https://unavatar.io/twitter/Gladwell",
    category: "Authors",
    books: [
      { title: "The Tipping Point", author: "Malcolm Gladwell", isbn: "9780316346627" },
      { title: "Outliers", author: "Malcolm Gladwell", isbn: "9780316017930" },
      { title: "Talking to Strangers", author: "Malcolm Gladwell", isbn: "9780316478526" },
      { title: "Blink", author: "Malcolm Gladwell", isbn: "9780316172325" }
    ]
  },
  {
    name: "Jordan Peterson",
    slug: "jordan-peterson",
    bio: "Clinical psychologist and author. His lectures and books on psychology, mythology, and responsibility have gained global attention.",
    image: "https://unavatar.io/twitter/jordanbpeterson",
    category: "Culture",
    books: [
      { title: "12 Rules for Life", author: "Jordan B. Peterson", isbn: "9780345816022" },
      { title: "Maps of Meaning", author: "Jordan B. Peterson", isbn: "9780415922227" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014295" },
      { title: "The Gulag Archipelago", author: "Aleksandr Solzhenitsyn", isbn: "9780061253805" }
    ]
  },
  {
    name: "Arianna Huffington",
    slug: "arianna-huffington",
    bio: "Founder of The Huffington Post and Thrive Global. A vocal advocate for well-being and the importance of sleep in leadership.",
    image: "https://unavatar.io/twitter/ariannahuff",
    category: "Culture",
    books: [
      { title: "The Sleep Revolution", author: "Arianna Huffington", isbn: "9781101904008" },
      { title: "Thrive", author: "Arianna Huffington", isbn: "9780804140843" },
      { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
      { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780062315007" }
    ]
  },
  {
    name: "Jensen Huang",
    slug: "jensen-huang",
    bio: "Co-founder and CEO of NVIDIA. A visionary leader at the forefront of the AI and graphics processing revolution.",
    image: "https://unavatar.io/twitter/jensenhuang",
    category: "Tech",
    books: [
      { title: "The Lean Startup", author: "Eric Ries", isbn: "9780307887894" },
      { title: "Only the Paranoid Survive", author: "Andrew S. Grove", isbn: "9780385483827" },
      { title: "Built to Last", author: "Jim Collins", isbn: "9780060516406" },
      { title: "High Output Management", author: "Andrew S. Grove", isbn: "9780679762881" }
    ]
  },
  {
    name: "Gwyneth Paltrow",
    slug: "gwyneth-paltrow",
    bio: "Actress and founder of Goop. Her lifestyle brand has become a major influence in wellness, health, and modern culture.",
    image: "https://unavatar.io/twitter/GwynethPaltrow",
    category: "Lifestyle",
    books: [
      { title: "The Clean Plate", author: "Gwyneth Paltrow", isbn: "9781538745236" },
      { title: "It's All Good", author: "Gwyneth Paltrow", isbn: "9781455522712" },
      { title: "A New Earth", author: "Eckhart Tolle", isbn: "9780452289581" },
      { title: "The Year of Magical Thinking", author: "Joan Didion", isbn: "9781400078431" }
    ]
  },
  {
    name: "Margaret Atwood",
    slug: "margaret-atwood",
    bio: "Renowned author and poet. Her dystopian fiction and literary criticism explore themes of power, gender, and the future.",
    image: "https://unavatar.io/twitter/MargaretAtwood",
    category: "Authors",
    books: [
      { title: "The Handmaid's Tale", author: "Margaret Atwood", isbn: "9780385490818" },
      { title: "The Testaments", author: "Margaret Atwood", isbn: "9780385543781" },
      { title: "1984", author: "George Orwell", isbn: "9780451524935" },
      { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524" }
    ]
  },
  {
    name: "Yuval Noah Harari",
    slug: "yuval-noah-harari",
    bio: "Historian and author. His books Sapiens and Homo Deus have become global phenomena, exploring the past and future of humanity.",
    image: "https://unavatar.io/twitter/harari_yuval",
    category: "Authors",
    books: [
      { title: "Sapiens", author: "Yuval Noah Harari", isbn: "9780062316097" },
      { title: "Homo Deus", author: "Yuval Noah Harari", isbn: "9780062464316" },
      { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", isbn: "9780525512172" },
      { title: "Guns, Germs, and Steel", author: "Jared Diamond", isbn: "9780393317558" }
    ]
  },
  {
    name: "Peter Thiel",
    slug: "peter-thiel",
    bio: "Venture capitalist and author. A contrarian thinker who emphasizes the importance of vertical progress and building monopolies.",
    image: "https://unavatar.io/twitter/peterthiel",
    category: "Business",
    books: [
      { title: "Zero to One", author: "Peter Thiel", isbn: "9780804139298" },
      { title: "The Sovereign Individual", author: "James Dale Davidson", isbn: "9780684832722" },
      { title: "Things Hidden Since the Foundation of the World", author: "René Girard", isbn: "9780804722155" },
      { title: "The Diamond Age", author: "Neal Stephenson", isbn: "9780553374575" }
    ]
  },
  {
    name: "Sheryl Sandberg",
    slug: "sheryl-sandberg",
    bio: "Former COO of Meta and founder of LeanIn.Org. An advocate for women in leadership and resilience in the face of adversity.",
    image: "https://unavatar.io/twitter/sherylsandberg",
    category: "Business",
    books: [
      { title: "Lean In", author: "Sheryl Sandberg", isbn: "9780385349949" },
      { title: "Option B", author: "Sheryl Sandberg", isbn: "9781524732684" },
      { title: "The Road to Character", author: "David Brooks", isbn: "9780812983418" },
      { title: "Now, Discover Your Strengths", author: "Marcus Buckingham", isbn: "9780743201148" }
    ]
  },
  {
    name: "Chris Anderson",
    slug: "chris-anderson",
    bio: "Head of TED. Known for his work in transforming TED into a global platform for ideas worth spreading.",
    image: "https://unavatar.io/twitter/TEDchris",
    category: "Tech",
    books: [
      { title: "TED Talks", author: "Chris Anderson", isbn: "9780544634496" },
      { title: "The Long Tail", author: "Chris Anderson", isbn: "9781401309664" },
      { title: "Free", author: "Chris Anderson", isbn: "9781401322861" },
      { title: "Makers", author: "Chris Anderson", isbn: "9780307951038" }
    ]
  }
];
