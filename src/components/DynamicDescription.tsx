"use client";

import { useState, useEffect } from "react";

interface DynamicDescriptionProps {
  isbn?: string;
  fallback: string;
}

export function DynamicDescription({ isbn, fallback }: DynamicDescriptionProps) {
  const [description, setDescription] = useState<string>(fallback);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isGenericFallback = fallback === "A world-class recommendation featured on 123reads. Impartial and curated by leading minds." || 
                             fallback === "A world-class recommendation featured on 123reads." ||
                             !fallback;

    if (!isbn || !isGenericFallback) {
      return;
    }

    const fetchDescription = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
        const data = await res.json();
        const bookData = data[`ISBN:${isbn}`];
        
        if (bookData?.description) {
          const desc = typeof bookData.description === 'string' 
            ? bookData.description 
            : bookData.description.value;
          
          if (desc) {
            setDescription(desc);
          }
        }
      } catch (err) {
        console.error("Failed to fetch dynamic description:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDescription();
  }, [isbn, fallback]);

  return (
    <div className="book-description-text">
      {description}
    </div>
  );
}
