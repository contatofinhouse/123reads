"use client";

import { useEffect, useState } from "react";
import { BookImage } from "@/components/BookImage";
import { getCoverUrl } from "@/lib/amazon";

export default function BookOfTheDayWidget() {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/book-of-the-day")
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "Inter, sans-serif" }}>
        <div style={{ width: "24px", height: "24px", border: "3px solid #f3f3f3", borderTop: "3px solid #e62429", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!book) return null;

  return (
    <div style={{ 
      fontFamily: "Inter, sans-serif", 
      background: "#ffffff", 
      padding: "20px", 
      display: "flex", 
      flexDirection: "column", 
      height: "100vh", 
      boxSizing: "border-box" 
    }}>
      <div style={{ fontSize: "10px", fontWeight: 800, color: "#e62429", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>
        Book of the Day
      </div>
      
      <div style={{ display: "flex", gap: "15px", flex: 1, overflow: "hidden" }}>
        <div style={{ flexShrink: 0, width: "80px", height: "120px", border: "1px solid #eee", boxShadow: "2px 2px 0px #121212" }}>
          <BookImage
            src={getCoverUrl(book.isbn, "M")}
            isbn={book.isbn}
            alt={book.title}
            author={book.author}
            width={80}
            height={120}
            className="book-cover-img"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: 800, color: "#121212", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {book.title}
          </h3>
          <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#555", fontWeight: 600 }}>
            by {book.author}
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#333", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {book.reason}
          </p>
        </div>
      </div>

      <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <a 
          href={`https://123reads.com/?q=${encodeURIComponent(book.title + " " + book.author)}`}
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            background: "#e62429",
            color: "white",
            textDecoration: "none",
            padding: "10px",
            fontWeight: 800,
            fontSize: "12px",
            borderRadius: "99px",
            boxShadow: "3px 3px 0px #121212",
            transition: "transform 0.1s"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "translate(-1px, -1px)"}
          onMouseOut={e => e.currentTarget.style.transform = "translate(0, 0)"}
        >
          View on 123reads
        </a>
        
        <div style={{ textAlign: "center", fontSize: "10px", color: "#888", fontWeight: 600 }}>
          Powered by <a href="https://123reads.com" target="_blank" rel="noopener noreferrer" style={{ color: "#e62429", textDecoration: "none" }}>123reads</a>
        </div>
      </div>
    </div>
  );
}
