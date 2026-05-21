"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [shelfCount, setShelfCount] = useState(0);

  useEffect(() => {
    const updateShelfCount = () => {
      try {
        const saved = localStorage.getItem("123reads-shelf");
        if (saved) setShelfCount(JSON.parse(saved).length);
      } catch {}
    };

    updateShelfCount();
    window.addEventListener('storage', updateShelfCount);
    return () => window.removeEventListener('storage', updateShelfCount);
  }, []);

  return (
    <header className="site-header">
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#000", margin: 0, display: "flex", alignItems: "center" }}>
          123<span style={{ color: "var(--accent-color)" }}>READS</span>
        </div>
      </Link>
      
      <nav className="header-nav-simple">
        <Link href="/lists">Lists</Link>
        <Link href="/lists/nyt-best-sellers">NYT</Link>
        <Link href="/hunt" className="hunt-link">Hunt</Link>
        <Link href="/#shelf" className="shelf-link">
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
          {shelfCount > 0 && <span className="shelf-badge-mini">{shelfCount}</span>}
        </Link>
      </nav>
    </header>
  );
}
