"use client";

import { useState } from "react";
import { BookImage } from "@/components/BookImage";
import { getCoverUrl } from "@/lib/amazon";

export default function AIRecommendWidget() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setRecommendations([]);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, filters: [], isLucky: false }),
      });
      const data = await res.json();
      if (res.ok) {
        // Only show top 2 to fit in small iframe
        setRecommendations(data.recommendations?.slice(0, 2) || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
      <div style={{ fontSize: "10px", fontWeight: 800, color: "#e62429", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
        AI Book Matchmaker
      </div>
      
      {!recommendations.length && !loading && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#121212", fontWeight: 600, lineHeight: 1.4 }}>
            Tell us what you like or want to learn, and we'll find your next obsession.
          </p>
          <form onSubmit={handleSearch} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. liked Atomic Habits..."
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "2px solid #121212",
                borderRadius: "99px",
                fontSize: "13px",
                fontFamily: "inherit",
                outline: "none",
                boxSizing: "border-box",
                boxShadow: "2px 2px 0px #121212"
              }}
            />
            <button
              type="submit"
              disabled={!prompt.trim()}
              style={{
                width: "100%",
                background: "#121212",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "99px",
                fontWeight: 800,
                fontSize: "13px",
                cursor: prompt.trim() ? "pointer" : "not-allowed",
                boxShadow: prompt.trim() ? "3px 3px 0px #e62429" : "none",
                opacity: prompt.trim() ? 1 : 0.5
              }}
            >
              Find Books
            </button>
          </form>
        </div>
      )}

      {loading && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "24px", height: "24px", border: "3px solid #f3f3f3", borderTop: "3px solid #e62429", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          <p style={{ marginTop: "10px", fontSize: "12px", color: "#555", fontWeight: 600 }}>Analyzing library...</p>
        </div>
      )}

      {recommendations.length > 0 && !loading && (
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px" }}>
          {recommendations.map((rec, idx) => (
            <a 
              key={idx}
              href={`https://123reads.com/?q=${encodeURIComponent(rec.title + " " + rec.author)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", gap: "10px", textDecoration: "none", color: "inherit", padding: "10px", border: "2px solid #eee", borderRadius: "10px", transition: "all 0.1s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#121212"; e.currentTarget.style.transform = "translate(-1px, -1px)"; e.currentTarget.style.boxShadow = "2px 2px 0px #121212"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.transform = "translate(0, 0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: "45px", height: "65px", flexShrink: 0 }}>
                <BookImage src={getCoverUrl(rec.isbn, "S")} alt={rec.title} author={rec.author} width={45} height={65} className="book-cover-img" />
              </div>
              <div style={{ overflow: "hidden" }}>
                <h4 style={{ margin: "0 0 2px 0", fontSize: "12px", fontWeight: 800, color: "#121212", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rec.title}</h4>
                <p style={{ margin: "0 0 4px 0", fontSize: "10px", color: "#555", fontWeight: 600 }}>by {rec.author}</p>
                <p style={{ margin: 0, fontSize: "10px", color: "#333", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{rec.reason}</p>
              </div>
            </a>
          ))}
          <button 
            onClick={() => setRecommendations([])}
            style={{ background: "transparent", border: "none", color: "#e62429", fontWeight: 800, fontSize: "11px", cursor: "pointer", padding: "5px" }}
          >
            &larr; Search again
          </button>
        </div>
      )}

      <div style={{ marginTop: "auto", paddingTop: "15px", textAlign: "center", fontSize: "10px", color: "#888", fontWeight: 600 }}>
        Powered by <a href="https://123reads.com" target="_blank" rel="noopener noreferrer" style={{ color: "#e62429", textDecoration: "none" }}>123reads</a>
      </div>
    </div>
  );
}
