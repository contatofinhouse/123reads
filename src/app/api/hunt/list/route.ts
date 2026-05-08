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
    
    // 1. Get real votes from Supabase
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
      // Map categories if needed (e.g. "Business & Tech" vs "Business")
      filtered = merged.filter(b => 
        b.category.toLowerCase().includes(category.toLowerCase()) || 
        category.toLowerCase().includes(b.category.toLowerCase())
      );
    }

    // 5. Sort by upvotes
    const sorted = filtered.sort((a, b) => b.upvotes - a.upvotes);

    return NextResponse.json({ books: sorted.slice(0, 50) });
  } catch (err: any) {
    console.error("Hunt list error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
