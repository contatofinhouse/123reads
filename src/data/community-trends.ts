import { Book } from "./influencers";

export interface CommunityTrend {
  platform: "BookTok" | "Reddit";
  title: string;
  author: string;
  isbn: string;
  trendReason: string;
  mentionCount: string;
}

export const communityTrends: CommunityTrend[] = [
  // --- BookTok ---
  {
    platform: "BookTok",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    isbn: "9781501161933",
    trendReason: "The ultimate 'emotional damage' read that defined a generation of BookTok.",
    mentionCount: "2.4B views"
  },
  {
    platform: "BookTok",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    isbn: "9781501110368",
    trendReason: "Sparked a global conversation about relationships and resilience.",
    mentionCount: "3.1B views"
  },
  {
    platform: "BookTok",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    isbn: "9780062060624",
    trendReason: "Viral for its poetic prose and heartbreaking reimagining of Greek myth.",
    mentionCount: "1.2B views"
  },
  {
    platform: "BookTok",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    isbn: "9781250301697",
    trendReason: "The thriller twist that everyone told their followers they 'didn't see coming'.",
    mentionCount: "850M views"
  },
  {
    platform: "BookTok",
    title: "Circe",
    author: "Madeline Miller",
    isbn: "9780316556347",
    trendReason: "Celebrated for its feminist perspective and atmospheric world-building.",
    mentionCount: "600M views"
  },

  // --- Reddit ---
  {
    platform: "Reddit",
    title: "Project Hail Mary",
    author: "Andy Weir",
    isbn: "9780593135204",
    trendReason: "Constantly voted the #1 'must-read' on r/books and r/printSF for years.",
    mentionCount: "Top Rated 2024"
  },
  {
    platform: "Reddit",
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    isbn: "9780375703768",
    trendReason: "The r/horror and r/books obsession for its unique ergodic structure.",
    mentionCount: "Cult Classic"
  },
  {
    platform: "Reddit",
    title: "Dark Matter",
    author: "Blake Crouch",
    isbn: "9781101904220",
    trendReason: "The go-to recommendation for anyone asking for a 'fast-paced' sci-fi on r/suggestmeabook.",
    mentionCount: "r/books Favorite"
  },
  {
    platform: "Reddit",
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    isbn: "9780765382030",
    trendReason: "Sparked deep philosophical debates across r/sciencefiction.",
    mentionCount: "Top Sci-Fi"
  },
  {
    platform: "Reddit",
    title: "Stoner",
    author: "John Williams",
    isbn: "9781590171997",
    trendReason: "A 'forgotten classic' that Reddit brought back to life through pure word-of-mouth.",
    mentionCount: "r/books Gem"
  }
];
