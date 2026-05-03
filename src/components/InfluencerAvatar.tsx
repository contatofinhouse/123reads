"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  priority?: boolean;
}

export function InfluencerAvatar({ name, image, priority = false }: Props) {
  const [retryCount, setRetryCount] = useState(0);
  const [isError, setIsError] = useState(false);

  const getInitials = (n: string) => {
    return n
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Multiple strategies to find an avatar
  // unoptimized={true} on the Image component ensures we hit these directly from the browser
  const sources = [
    image, // Primary (e.g. unavatar.io/twitter/...)
    // Backup 1: UI Avatars (100% reliable)
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=121212&color=fff&size=128&bold=true`
  ];

  if (isError) {
    return <div className="avatar-fallback">{getInitials(name)}</div>;
  }

  return (
    <div className="avatar-container" style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
      <Image
        src={sources[retryCount]}
        alt={name}
        width={56}
        height={56}
        priority={priority}
        unoptimized={true} // Crucial to avoid Next.js 429 proxy errors
        className="influencer-avatar"
        style={{ borderRadius: '8px', border: '2px solid var(--text-primary)', objectFit: 'cover' }}
        onError={() => {
          if (retryCount < sources.length - 1) {
            setRetryCount(retryCount + 1);
          } else {
            setIsError(true);
          }
        }}
      />
    </div>
  );
}
