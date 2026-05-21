"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2 className="footer-logo">123<span>READS</span></h2>
          <p className="footer-tagline">The impartial alternative to Goodreads. AI-powered recommendations curated by the world's sharpest minds.</p>
        </div>
        
        <div className="footer-links-group">
          <h4>Discover</h4>
          <Link href="/lists">All Book Lists</Link>
          <Link href="/hunt">Community Hunt</Link>
          <Link href="/lists/nyt-best-sellers">NYT Best Sellers</Link>
          <Link href="/guides/kindle">Kindle Guide</Link>
          <Link href="/affiliate-disclosure">Disclosure</Link>
        </div>

        <div className="footer-links-group">
          <h4>Community Pulse</h4>
          <Link href="/lists/booktok-viral-hits">#BookTok</Link>
          <Link href="/lists/reddits-all-time-favorites">#rBooks</Link>
          <Link href="/lists/booktok-viral-hits">#Bookstagram</Link>
          <Link href="/lists?q=booktube">#BookTube</Link>
          <Link href="/lists?q=suggestmeabook">#SuggestMeABook</Link>
          <div className="social-logos" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://tiktok.com/@123reads" target="_blank" rel="noopener noreferrer" title="TikTok Community" style={{ color: 'var(--text-secondary)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.72.42-1.24 1.16-1.41 1.97-.05.33-.06.67-.05 1.01.05 1.21.62 2.34 1.59 3.05.77.56 1.74.83 2.69.75 1.2-.07 2.32-.74 2.91-1.81.45-.7.65-1.54.63-2.37-.02-3.35-.01-6.71-.01-10.06z"/></svg>
            </a>
            <a href="https://reddit.com/r/books" target="_blank" rel="noopener noreferrer" title="Reddit Books" style={{ color: 'var(--text-secondary)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.057 1.597.047.253.075.512.075.776 0 2.274-2.481 4.119-5.541 4.119-3.06 0-5.541-1.845-5.541-4.119 0-.253.027-.503.069-.747a1.737 1.737 0 0 1-1.019-1.587c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.179.465 1.196-.846 2.84-1.398 4.652-1.482l.805-3.779c.031-.149.17-.257.327-.243l3.143.664c.125-.162.33-.266.56-.266zM10.74 11.061c-.476 0-.859.383-.859.859s.383.86.859.86c.476 0 .86-.384.86-.86s-.384-.859-.86-.859zm4.52 0c-.476 0-.859.383-.859.859s.383.86.859.86c.476 0 .86-.384.86-.86s-.384-.859-.86-.859zm-4.525 2.433c-.05.003-.101.008-.15.014a.27.27 0 0 0-.214.286c.006.15.132.261.282.255.049-.003.075-.016.159-.016h.016c.303 0 .568.138.746.39.23.351.59.58 1.007.58.416 0 .777-.229 1.008-.58.178-.252.443-.39.746-.39h.016c.084 0 .11.013.159.016.15.006.276-.105.282-.255a.27.27 0 0 0-.214-.286c-.05-.006-.1-.011-.15-.014h-.016c-.432 0-.813.193-1.035.539-.135.21-.354.347-.604.347-.25 0-.469-.137-.604-.347-.222-.346-.603-.539-1.035-.539h-.016z" /></svg>
            </a>
            <a href="https://instagram.com/explore/tags/bookstagram" target="_blank" rel="noopener noreferrer" title="Bookstagram" style={{ color: 'var(--text-secondary)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Popular Themes</h4>
          <Link href="/lists/best-books-productivity">Productivity</Link>
          <Link href="/lists/must-read-sci-fi-classics">Sci-Fi Classics</Link>
          <Link href="/lists/best-books-for-entrepreneurs">Entrepreneurs</Link>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', width: '100%', padding: '0 1rem', boxSizing: 'border-box' }} dangerouslySetInnerHTML={{ __html: `<div style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; border: 1px solid rgb(224, 224, 224); border-radius: 12px; padding: 20px; width: 100%; max-width: 500px; box-sizing: border-box; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px;"><div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;"><img alt="123reads.com Like goodreads. But better." src="https://ph-files.imgix.net/e4f216d3-4978-4bb6-9fa1-a0ba377ed8f0.svg?auto=format&amp;fit=crop&amp;w=80&amp;h=80" style="width: 64px; height: 64px; border-radius: 8px; object-fit: cover; flex-shrink: 0;"><div style="flex: 1 1 0%; min-width: 0px;"><h3 style="margin: 0px; font-size: 18px; font-weight: 600; color: rgb(26, 26, 26); line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">123reads.com Like goodreads. But better.</h3><p style="margin: 4px 0px 0px; font-size: 14px; color: rgb(102, 102, 102); line-height: 1.4; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">Find books recommended by the world’s smartest minds</p></div></div><a href="https://www.producthunt.com/products/123reads-com-like-goodreads-but-better?embed=true&amp;utm_source=embed&amp;utm_medium=post_embed" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 12px; padding: 8px 16px; background: rgb(255, 97, 84); color: rgb(255, 255, 255); text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Check it out on Product Hunt →</a></div>` }} />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 123reads. Signal over noise. All rights reserved.</p>
      </div>
    </footer>
  );
}
