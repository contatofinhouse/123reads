import { BookImage } from "@/components/BookImage";
import { getCoverUrl } from "@/lib/amazon";
import { computeCrossReferences } from "@/data/cross-references";

export const dynamic = "force-dynamic";

export default function TrendingWidget() {
  const trendingBooks = computeCrossReferences().slice(0, 5); // top 5 most recommended

  return (
    <div style={{ 
      fontFamily: "Inter, sans-serif", 
      background: "#ffffff", 
      padding: "20px", 
      display: "flex", 
      flexDirection: "column", 
      height: "100vh", 
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      <div style={{ fontSize: "10px", fontWeight: 800, color: "#e62429", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>
        Trending on 123reads
      </div>
      
      <div style={{ flex: 1, display: "flex", overflowX: "auto", gap: "15px", paddingBottom: "10px", scrollSnapType: "x mandatory" }}>
        {trendingBooks.map((book, idx) => (
          <a 
            key={book.isbn}
            href={`https://123reads.com/?q=${encodeURIComponent(book.title + " " + book.author)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="trending-book-card"
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              minWidth: "100px", 
              maxWidth: "100px", 
              textDecoration: "none", 
              color: "inherit",
              scrollSnapAlign: "start",
              transition: "transform 0.2s"
            }}
          >
            <div style={{ width: "100px", height: "150px", border: "1px solid #eee", boxShadow: "2px 2px 0px #121212", marginBottom: "8px" }}>
              <BookImage
                src={getCoverUrl(book.isbn, "M")}
                isbn={book.isbn}
                alt={book.title}
                author={book.author}
                width={100}
                height={150}
                className="book-cover-img"
              />
            </div>
            <h4 style={{ margin: "0 0 2px 0", fontSize: "11px", fontWeight: 800, color: "#121212", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {book.title}
            </h4>
            <p style={{ margin: 0, fontSize: "9px", color: "#555", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {book.count} lists
            </p>
          </a>
        ))}
      </div>

      <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <a 
          href="https://123reads.com/insights"
          target="_blank" 
          rel="noopener noreferrer"
          className="trending-see-more"
          style={{
            display: "block",
            textAlign: "center",
            background: "#121212",
            color: "white",
            textDecoration: "none",
            padding: "10px",
            fontWeight: 800,
            fontSize: "12px",
            borderRadius: "99px",
            boxShadow: "3px 3px 0px #e62429",
            transition: "transform 0.1s"
          }}
        >
          See more
        </a>
        
        <div style={{ textAlign: "center", fontSize: "10px", color: "#888", fontWeight: 600 }}>
          Powered by <a href="https://123reads.com" target="_blank" rel="noopener noreferrer" style={{ color: "#e62429", textDecoration: "none" }}>123reads</a>
        </div>
      </div>
      <style>{`
        ::-webkit-scrollbar { height: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #888; }
        .trending-book-card:hover { transform: translateY(-2px); }
        .trending-see-more:hover { transform: translate(-1px, -1px); }
      `}</style>
    </div>
  );
}
