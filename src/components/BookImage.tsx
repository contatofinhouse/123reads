"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getGoogleCoverUrl } from "@/lib/amazon";

interface BookImageProps {
  src: string;
  isbn?: string; // Added for fallback
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function BookImage({ src, isbn, alt, width, height, className, priority, style }: BookImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasRetried, setHasRetried] = useState(false);

  // Sync internal state if src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setError(false);
    setHasRetried(false);
  }, [src]);

  if (error) {
    return (
      <div 
        className={`book-mockup ${className || ""}`} 
        style={{ width: `${width}px`, height: `${height}px`, ...style }}
      >
        <div className="mockup-title">{alt}</div>
        <div className="mockup-author">Unknown</div>
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
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (!hasRetried && isbn) {
            console.log(`Fallback to Google Books for ISBN: ${isbn}`);
            setHasRetried(true);
            setCurrentSrc(getGoogleCoverUrl(isbn));
          } else {
            setError(true);
            setIsLoading(false);
          }
        }}
        style={{ ...style, opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      />
    </div>
  );
}
