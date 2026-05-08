import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kindle Buying Guide 2026: Which E-Reader is Best for You?",
  description: "Comparing Kindle Basic, Paperwhite, and Scribe. Find the best Kindle for your reading habits with our impartial 2026 guide.",
  alternates: {
    canonical: "/guides/kindle",
  },
};

export default function KindleGuidePage() {
  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
      </header>

      <main>
        <div className="list-page-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "1rem", lineHeight: 1.1 }}>Kindle Buying Guide <span style={{ color: "var(--accent-color)" }}>2026</span></h1>
          <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "700px", margin: "0 auto" }}>
            The definitive, impartial guide to choosing your next e-reader. We've tested them all so you don't have to.
          </p>
        </div>

        <section className="guide-section">
          <h2>Which Kindle should you buy?</h2>
          <p>
            Amazon's Kindle lineup has never been stronger, but with so many models, it's easy to get overwhelmed. 
            Whether you're a casual bedtime reader or a professional who needs to take notes on the go, there's a Kindle designed specifically for you.
          </p>

          <div className="comparison-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Kindle (Basic)</th>
                  <th>Kindle Paperwhite</th>
                  <th>Kindle Scribe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="model-name">Display Size</td>
                  <td>6" (300 ppi)</td>
                  <td>6.8" (300 ppi)</td>
                  <td>10.2" (300 ppi)</td>
                </tr>
                <tr>
                  <td className="model-name">Waterproof</td>
                  <td>No</td>
                  <td className="check-mark">Yes (IPX8)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="model-name">Warm Light</td>
                  <td>No</td>
                  <td className="check-mark">Yes (Adjustable)</td>
                  <td className="check-mark">Yes (Adjustable)</td>
                </tr>
                <tr>
                  <td className="model-name">Note-Taking</td>
                  <td>No</td>
                  <td>No</td>
                  <td className="check-mark">Yes (Stylus included)</td>
                </tr>
                <tr>
                  <td className="model-name">Battery Life</td>
                  <td>Up to 6 weeks</td>
                  <td>Up to 10 weeks</td>
                  <td>Up to 12 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="guide-section">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.8rem" }}>1. Kindle Paperwhite</h2>
              <p style={{ fontWeight: 700, color: "var(--accent-color)" }}>Best for Most People</p>
              <p>
                The Paperwhite remains the sweet spot in the lineup. With its larger 6.8-inch display, adjustable warm light for nighttime reading, and waterproof design, it's the most versatile e-reader on the market.
              </p>
              <div className="pros-cons">
                <div className="pros-box">
                  <h4>Pros</h4>
                  <ul>
                    <li>Waterproof design</li>
                    <li>Warm light is amazing</li>
                    <li>Perfect size</li>
                  </ul>
                </div>
                <div className="cons-box">
                  <h4>Cons</h4>
                  <ul>
                    <li>Prone to fingerprints</li>
                  </ul>
                </div>
              </div>
              <a href="https://amzn.to/3UEp8z0" target="_blank" rel="noopener noreferrer" className="primary" style={{ textDecoration: "none", display: "inline-block", padding: "1rem 2rem", borderRadius: "99px", background: "var(--accent-color)", color: "white", fontWeight: 800 }}>
                Check Price on Amazon
              </a>
            </div>
            <div style={{ background: "#f0f0f0", borderRadius: "20px", height: "400px", overflow: "hidden", border: "2px solid var(--text-primary)" }}>
              <img src="/images/kindle-paperwhite.png" alt="Kindle Paperwhite" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        <section className="guide-section" style={{ marginTop: "6rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div style={{ background: "#f0f0f0", borderRadius: "20px", height: "400px", overflow: "hidden", border: "2px solid var(--text-primary)", order: 2 }}>
              <img src="/images/kindle-basic.png" alt="Kindle Basic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ order: 1 }}>
              <h2 style={{ fontSize: "1.8rem" }}>2. Kindle (2022 Release)</h2>
              <p style={{ fontWeight: 700, color: "var(--text-secondary)" }}>Best for Portability & Budget</p>
              <p>
                Don't let the "Basic" tag fool you. The entry-level Kindle now features a 300 ppi high-resolution screen, USB-C charging, and double the storage of previous generations. It's incredibly light and fits in most pockets.
              </p>
              <div className="pros-cons">
                <div className="pros-box">
                  <h4>Pros</h4>
                  <ul>
                    <li>Incredibly light</li>
                    <li>Most affordable</li>
                    <li>Sharp display</li>
                  </ul>
                </div>
                <div className="cons-box">
                  <h4>Cons</h4>
                  <ul>
                    <li>Not waterproof</li>
                    <li>No warm light</li>
                  </ul>
                </div>
              </div>
              <a href="https://amzn.to/3UEp8z0" target="_blank" rel="noopener noreferrer" className="secondary" style={{ textDecoration: "none", display: "inline-block", padding: "1rem 2rem", borderRadius: "99px", border: "2px solid var(--text-primary)", color: "var(--text-primary)", fontWeight: 800 }}>
                Check Price on Amazon
              </a>
            </div>
          </div>
        </section>

        <div className="cta-banner">
          <h2>Ready to start reading?</h2>
          <p>Whichever model you choose, the best way to find your first book is right here on 123reads.</p>
          <Link href="/" className="primary" style={{ textDecoration: "none", display: "inline-block", padding: "1.2rem 3rem", borderRadius: "99px", background: "white", color: "black", fontWeight: 800, border: "none" }}>
            Get AI Book Recommendations &rarr;
          </Link>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 123reads. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/lists">All Lists</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        </div>
      </footer>
    </div>
  );
}
