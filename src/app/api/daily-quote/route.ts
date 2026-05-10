import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // 1. Get the total count of quotes
    const { count, error: countError } = await supabase
      .from('famous_quotes')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;

    if (!count || count === 0) {
      return NextResponse.json({
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
        author_image: "https://unavatar.io/twitter/stevejobs"
      });
    }

    // Pick a random offset
    const randomOffset = Math.floor(Math.random() * (count || 1));

    // Fetch one random quote
    const { data, error } = await supabase
      .from('famous_quotes')
      .select('*')
      .range(randomOffset, randomOffset)
      .maybeSingle();

    if (error || !data) throw error || new Error("No data found");

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching daily quote:', error);
    return NextResponse.json({
      text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
      author: "Victor Hugo",
      author_image: "https://unavatar.io/twitter/victorhugo"
    });
  }
}
