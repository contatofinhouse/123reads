import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partnerships & Widgets | 123reads",
  description: "Add 123reads AI book recommendations to your blog, newsletter, or website for free.",
};

export default function PartnersPage() {
  return (
    <div className="container">
      <Header />
      <main>
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
            Bring <span style={{ color: "var(--accent-color)" }}>123reads</span> to your audience.
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "600px", margin: "0 auto" }}>
            Add our premium, AI-powered book recommendation widgets to your blog, newsletter, or community site in seconds. 100% free.
          </p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          
          {/* BOTD Widget Info */}
          <div style={{ background: "var(--card-bg)", padding: "2rem", border: "2px solid var(--card-border)", borderRadius: "20px", boxShadow: "var(--card-shadow)" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>"Book of the Day" Widget</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              A fresh, high-quality book recommendation updated daily. Perfect for sidebars or daily newsletters.
            </p>
            <div style={{ marginBottom: "1.5rem", border: "2px dashed #ccc", padding: "10px", background: "#f9f9f9", borderRadius: "10px", display: "flex", justifyContent: "center" }}>
              <iframe 
                src="/widgets/book-of-the-day" 
                width="300" 
                height="280" 
                style={{ border: "none", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                title="123reads Book of the Day"
              />
            </div>
            <div style={{ background: "#121212", color: "#fff", padding: "1rem", borderRadius: "8px", fontSize: "0.8rem", overflowX: "auto" }}>
              <code>
                {`<iframe src="https://123reads.com/widgets/book-of-the-day" width="300" height="280" style="border:none; border-radius:12px;" title="123reads Book of the Day"></iframe>`}
              </code>
            </div>
          </div>

          {/* AI Recommender Widget Info */}
          <div style={{ background: "var(--card-bg)", padding: "2rem", border: "2px solid var(--card-border)", borderRadius: "20px", boxShadow: "var(--card-shadow)" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>"AI Matchmaker" Widget</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Let your users chat with our AI directly on your site to find their next favorite book.
            </p>
            <div style={{ marginBottom: "1.5rem", border: "2px dashed #ccc", padding: "10px", background: "#f9f9f9", borderRadius: "10px", display: "flex", justifyContent: "center" }}>
              <iframe 
                src="/widgets/ai-recommend" 
                width="300" 
                height="320" 
                style={{ border: "none", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                title="123reads AI Matchmaker"
              />
            </div>
            <div style={{ background: "#121212", color: "#fff", padding: "1rem", borderRadius: "8px", fontSize: "0.8rem", overflowX: "auto" }}>
              <code>
                {`<iframe src="https://123reads.com/widgets/ai-recommend" width="300" height="320" style="border:none; border-radius:12px;" title="123reads AI Matchmaker"></iframe>`}
              </code>
            </div>
          </div>

          {/* Trending Widget Info */}
          <div style={{ background: "var(--card-bg)", padding: "2rem", border: "2px solid var(--card-border)", borderRadius: "20px", boxShadow: "var(--card-shadow)" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>"Trending Books" Widget</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Display the most recommended books across all our curated lists in a slick horizontal carousel.
            </p>
            <div style={{ marginBottom: "1.5rem", border: "2px dashed #ccc", padding: "10px", background: "#f9f9f9", borderRadius: "10px", display: "flex", justifyContent: "center" }}>
              <iframe 
                src="/widgets/trending" 
                width="340" 
                height="320" 
                style={{ border: "none", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                title="123reads Trending Books"
              />
            </div>
            <div style={{ background: "#121212", color: "#fff", padding: "1rem", borderRadius: "8px", fontSize: "0.8rem", overflowX: "auto" }}>
              <code>
                {`<iframe src="https://123reads.com/widgets/trending" width="340" height="320" style="border:none; border-radius:12px;" title="123reads Trending Books"></iframe>`}
              </code>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
