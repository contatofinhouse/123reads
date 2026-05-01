"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface InfluencerSummary {
  name: string;
  slug: string;
  bio: string;
  image: string;
  bookCount: number;
}

interface ThematicSummary {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  bookCount: number;
}

interface Props {
  influencers: InfluencerSummary[];
  thematicLists: ThematicSummary[];
}

export function ListsIndexPage({ influencers, thematicLists }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(thematicLists.map(list => list.category)))];

  const filteredLists = selectedCategory === "All" 
    ? thematicLists 
    : thematicLists.filter(list => list.category === selectedCategory);

  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
      </header>

      <main>
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Thematic Reading Lists</h2>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "2px solid var(--text-primary)",
                background: "var(--card-bg)",
                fontFamily: "inherit",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "2px 2px 0px #121212"
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="influencer-grid">
            {filteredLists.map(list => (
              <Link key={list.slug} href={`/lists/${list.slug}`} className="card-link">
                <div className="influencer-card">
                  <div className="influencer-header">
                    <Image src={list.image} alt={list.title} width={56} height={56} className="influencer-avatar" />
                    <div>
                      <h3 className="influencer-name">{list.title}</h3>
                      <span className="influencer-count">{list.bookCount} books</span>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.85rem", marginTop: "0.75rem" }}>{list.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Curated by Brilliant Minds</h2>
          <div className="influencer-grid">
            {influencers.map(inf => (
              <Link key={inf.slug} href={`/lists/${inf.slug}`} className="card-link">
                <div className="influencer-card">
                  <div className="influencer-header">
                    <Image src={inf.image} alt={inf.name} width={56} height={56} className="influencer-avatar" />
                    <div>
                      <h3 className="influencer-name">{inf.name}</h3>
                      <span className="influencer-count">{inf.bookCount} books</span>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.85rem", marginTop: "0.75rem" }}>{inf.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 123reads. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/insights">Insights</Link>
        </div>
      </footer>
    </div>
  );
}
