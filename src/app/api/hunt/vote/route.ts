import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { createHash } from "crypto";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { isbn, title, author, category, type, voter_email } = await req.json();

    // Honeypot check: If this "hidden" field is filled, it's likely a bot
    if (voter_email) {
      console.warn("Bot detected via honeypot!");
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    if (!isbn || !type || !['up', 'down'].includes(type)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic Bot Prevention: IP + User Agent Hash
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const ua = req.headers.get("user-agent") || "unknown";
    const voterHash = createHash("sha256").update(`${ip}-${ua}`).digest("hex");

    // Check if voter already voted for this ISBN in the last 24h
    const { data: recentVote, error: logError } = await supabase
      .from("vote_logs")
      .select("id")
      .eq("isbn", isbn)
      .eq("voter_hash", voterHash)
      .gt("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .single();

    if (recentVote) {
      return NextResponse.json({ error: "Already voted for this book today" }, { status: 429 });
    }

    // Record the vote log
    await supabase.from("vote_logs").insert({
      isbn,
      voter_hash: voterHash
    });

    // Update or insert into hunt_votes
    const { data: currentVotes, error: fetchError } = await supabase
      .from("hunt_votes")
      .select("*")
      .eq("isbn", isbn)
      .single();

    if (currentVotes) {
      const updateData = type === 'up' 
        ? { upvotes: currentVotes.upvotes + 1, last_vote_at: new Date().toISOString() }
        : { downvotes: currentVotes.downvotes + 1, last_vote_at: new Date().toISOString() };
      
      await supabase
        .from("hunt_votes")
        .update(updateData)
        .eq("isbn", isbn);
    } else {
      const insertData = {
        isbn,
        title,
        author,
        category,
        upvotes: type === 'up' ? 1 : 0,
        downvotes: type === 'down' ? 1 : 0,
        last_vote_at: new Date().toISOString()
      };
      
      await supabase
        .from("hunt_votes")
        .insert(insertData);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Vote error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
