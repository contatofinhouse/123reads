"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { InfluencerAvatar } from "@/components/InfluencerAvatar";

interface InfluencerSummary {
  name: string;
  slug: string;
  bio: string;
  image: string;
  category: string;
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

  const categories = ["All", ...Array.from(new Set([
    ...thematicLists.map(list => list.category),
    ...influencers.map(inf => inf.category)
  ]))].sort();

  const filteredThematic = selectedCategory === "All" 
    ? thematicLists 
    : thematicLists.filter(list => list.category === selectedCategory);

  const filteredInfluencers = selectedCategory === "All"
    ? influencers
    : influencers.filter(inf => inf.category === selectedCategory);

  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/insights">Insights</Link>
        </nav>
      </header>

      <main>
        <div className="page-header-row">
          <h1 className="list-page-title">Curated Lists</h1>
          <div className="filter-dropdown-container">
            <label htmlFor="category-filter" style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", marginRight: "0.5rem" }}>Filter by Topic:</label>
            <select 
              id="category-filter"
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredThematic.length > 0 && (
          <section style={{ marginBottom: "3rem" }}>
            <h2 className="section-title">Thematic Reading Lists</h2>
            <div className="influencer-grid">
              {filteredThematic.map(list => (
                <Link key={list.slug} href={`/lists/${list.slug}`} className="card-link">
                  <div className="influencer-card">
                    <div className="influencer-header">
                      <InfluencerAvatar 
                      name={list.title}
                      image={list.image}
                    />
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
        )}

        {filteredInfluencers.length > 0 && (
          <section>
            <h2 className="section-title">Curated by Brilliant Minds</h2>
            <div className="influencer-grid">
              {filteredInfluencers.map(inf => (
                <Link key={inf.slug} href={`/lists/${inf.slug}`} className="card-link">
                  <div className="influencer-card">
                    <div className="influencer-header">
                    <InfluencerAvatar 
                      name={inf.name}
                      image={inf.image}
                    />
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
        )}

        {filteredThematic.length === 0 && filteredInfluencers.length === 0 && (
          <div className="empty-results">
            <p>No lists found for this category. Try selecting another one!</p>
            <button onClick={() => setSelectedCategory("All")} className="view-all-link">Show All</button>
          </div>
        )}
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
