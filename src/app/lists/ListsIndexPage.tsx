"use client";

import Link from "next/link";

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
  bookCount: number;
}

interface Props {
  influencers: InfluencerSummary[];
  thematicLists: ThematicSummary[];
}

export function ListsIndexPage({ influencers, thematicLists }: Props) {
  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>READ<span>RADAR</span></h1>
        </Link>
      </header>

      <main>
        <section style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">Thematic Reading Lists</h2>
          <div className="influencer-grid">
            {thematicLists.map(list => (
              <Link key={list.slug} href={`/lists/${list.slug}`} className="card-link">
                <div className="influencer-card">
                  <h3 className="influencer-name">{list.title}</h3>
                  <p style={{ color: "#555", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{list.description}</p>
                  <span className="influencer-count">{list.bookCount} books &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Curated by Influencers</h2>
          <div className="influencer-grid">
            {influencers.map(inf => (
              <Link key={inf.slug} href={`/lists/${inf.slug}`} className="card-link">
                <div className="influencer-card">
                  <div className="influencer-header">
                    <img src={inf.image} alt={inf.name} className="influencer-avatar" />
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
