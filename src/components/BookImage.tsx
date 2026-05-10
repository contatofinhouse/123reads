"use client";

import { useState } from "react";
import Image from "next/image";

interface BookImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function BookImage({ src, alt, width, height, className, priority, style }: BookImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        unoptimized={true}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        style={{ ...style, display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
}
