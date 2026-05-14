import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getAllBooks } from "@/data/all-books";

export const dynamic = 'force-dynamic';

// Simple hash for consistent mock votes
function getMockVotes(isbn: string) {
  let hash = 0;
  for (let i = 0; i < isbn.length; i++) {
    hash = (hash << 5) - hash + isbn.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash % 45) + 5; // 5 to 50 votes
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = (page - 1) * limit;
    
    // 1. Get real votes from Supabase
    // Note: In the future, we should optimize this to only fetch votes for the specific page if possible,
    // but since we merge with local data and sort by upvotes (including mock votes), 
    // we currently need the full map to determine the global ranking.
    const { data: dbVotes, error } = await supabase
      .from("hunt_votes")
      .select("*");

    if (error) throw error;

    const dbVotesMap = new Map(dbVotes?.map(v => [v.isbn, v]) || []);

    // 2. Get all books from local data
    const allBooks = getAllBooks();

    // 3. Merge
    const merged = allBooks.map(book => {
      const realData = dbVotesMap.get(book.isbn);
      const mockUpvotes = getMockVotes(book.isbn);
      
      return {
        ...book,
        upvotes: (realData?.upvotes || 0) + mockUpvotes,
        downvotes: (realData?.downvotes || 0),
        isMock: !realData
      };
    });

    // 4. Filter by category
    let filtered = merged;
    if (category && category !== "All") {
      filtered = merged.filter(b => 
        b.category.toLowerCase().includes(category.toLowerCase()) || 
        category.toLowerCase().includes(b.category.toLowerCase())
      );
    }

    // 5. Sort by upvotes (Global Rank)
    const sorted = filtered.sort((a, b) => b.upvotes - a.upvotes);

    // 6. Paginate
    const paginated = sorted.slice(offset, offset + limit);

    return NextResponse.json({ 
      books: paginated,
      hasMore: offset + limit < sorted.length,
      total: sorted.length
    });
  } catch (err: any) {
    console.error("Hunt list error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
