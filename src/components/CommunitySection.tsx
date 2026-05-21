import React from 'react';
import Link from 'next/link';
import { BookImage } from './BookImage';
import { getCoverUrl } from '@/lib/amazon';
import { SocialBadge } from './SocialBadge';
import { communityTrends } from '@/data/community-trends';
import { useBookQuickView } from '@/context/BookQuickViewContext';

export const CommunitySection: React.FC = () => {
  const { openQuickView } = useBookQuickView();
  // Take 3 from BookTok and 3 from Reddit for the preview
  const booktokTrending = communityTrends.filter(t => t.platform === 'BookTok').slice(0, 3);
  const redditTrending = communityTrends.filter(t => t.platform === 'Reddit').slice(0, 3);

  return (
    <section className="community-pulse-section" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <div className="section-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Social Pulse</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>What readers are talking about right now on social media.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/lists/booktok-viral-hits" className="view-all-link" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
            BookTok Hits &rarr;
          </Link>
          <Link href="/lists/reddits-all-time-favorites" className="view-all-link" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
            Reddit Favs &rarr;
          </Link>
        </div>
      </div>

      <div className="community-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {/* BookTok Column */}
        <div className="community-column">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <SocialBadge platform="BookTok" label="Trending on TikTok" />
          </div>
          <div className="community-cards-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {booktokTrending.map((book) => (
              <div key={book.isbn} onClick={() => openQuickView(book)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") openQuickView(book) }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', outline: 'none' }}>
                <div className="community-mini-card" style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  padding: '1rem', 
                  border: '2px solid var(--text-primary)', 
                  borderRadius: '12px',
                  background: 'white',
                  boxShadow: '4px 4px 0px var(--text-primary)',
                  transition: 'all 0.15s ease'
                }}>
                  <div style={{ width: '50px', height: '75px', flexShrink: 0 }}>
                    <BookImage src={getCoverUrl(book.isbn)} alt={book.title} width={50} height={75} className="book-cover-img" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{book.title}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>{book.author}</span>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-color)' }}>{book.mentionCount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reddit Column */}
        <div className="community-column">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <SocialBadge platform="Reddit" label="Voted on Reddit" />
          </div>
          <div className="community-cards-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {redditTrending.map((book) => (
              <div key={book.isbn} onClick={() => openQuickView(book)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") openQuickView(book) }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', outline: 'none' }}>
                <div className="community-mini-card" style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  padding: '1rem', 
                  border: '2px solid var(--text-primary)', 
                  borderRadius: '12px',
                  background: 'white',
                  boxShadow: '4px 4px 0px var(--text-primary)',
                  transition: 'all 0.15s ease'
                }}>
                  <div style={{ width: '50px', height: '75px', flexShrink: 0 }}>
                    <BookImage src={getCoverUrl(book.isbn)} alt={book.title} width={50} height={75} className="book-cover-img" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{book.title}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>{book.author}</span>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FF4500' }}>{book.mentionCount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .community-mini-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px var(--text-primary) !important;
        }
      `}</style>
    </section>
  );
};
