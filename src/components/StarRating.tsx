"use client";

export function StarRating({ rating }: { rating?: number }) {
  if (!rating) return null;

  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="star-rating" title={`${rating} out of 5`}>
      {"★".repeat(full)}
      {hasHalf && "⯨"}
      {"☆".repeat(empty)}
      <span className="rating-number">{rating.toFixed(1)}</span>
    </div>
  );
}
