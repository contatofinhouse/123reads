"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

interface BookImageProps {
  src: string;
  isbn?: string;
  alt: string;
  author?: string; // Added for the abstract cover
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function BookImage({ src, isbn, alt, author, width, height, className, priority, style }: BookImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Deterministic gradient based on title
  const abstractStyle = useMemo(() => {
    const themes = [
      { bg: "linear-gradient(135deg, #FF5F6D, #FFC371)", text: "#fff" }, // Sunset
      { bg: "linear-gradient(135deg, #2193b0, #6dd5ed)", text: "#fff" }, // Ocean
      { bg: "linear-gradient(135deg, #ee9ca7, #ffdde1)", text: "#d63384" }, // Rose
      { bg: "linear-gradient(135deg, #11998e, #38ef7d)", text: "#fff" }, // Emerald
      { bg: "linear-gradient(135deg, #8E2DE2, #4A00E0)", text: "#fff" }, // Royal
      { bg: "linear-gradient(135deg, #f953c6, #b91d73)", text: "#fff" }, // Pink
      { bg: "linear-gradient(135deg, #f7b733, #fc4a1a)", text: "#fff" }, // Fire
      { bg: "linear-gradient(135deg, #00B4DB, #0083B0)", text: "#fff" }, // Blue
    ];
    
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < alt.length; i++) {
      hash = alt.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % themes.length;
    return themes[index];
  }, [alt]);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
  }, [src]);

  if (error || !src) {
    return (
      <div 
        className={`book-abstract-cover ${className || ""}`} 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`, 
          background: abstractStyle.bg,
          color: abstractStyle.text,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          textAlign: 'center',
          border: '2px solid var(--text-primary)',
          borderRadius: '8px',
          boxShadow: '4px 4px 0px var(--text-primary)',
          ...style 
        }}
      >
        <div style={{ 
          fontSize: width < 100 ? '0.7rem' : '0.9rem', 
          fontWeight: 900, 
          textTransform: 'uppercase',
          lineHeight: 1.2,
          marginBottom: '0.5rem',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {alt}
        </div>
        {author && width > 80 && (
          <div style={{ 
            fontSize: '0.6rem', 
            fontWeight: 700, 
            opacity: 0.8,
            textTransform: 'uppercase'
          }}>
            {author}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="book-image-wrapper" style={{ position: 'relative', width: `${width}px`, height: `${height}px`, ...style }}>
      {isLoading && (
        <div 
          className="book-image-skeleton" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            animation: 'pulse 1.5s infinite'
          }} 
        />
      )}
      <Image
        key={src}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        unoptimized={true}
        onLoad={(e) => {
          setIsLoading(false);
          const target = e.target as HTMLImageElement;
          // OpenLibrary returns a 1x1 pixel image when cover is missing. We treat this as an error.
          if (target && target.naturalWidth <= 1) {
            setError(true);
          }
        }}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        style={{ ...style, opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      />
    </div>
  );
}
