"use client";

import { useRef } from "react";
import Link from "next/link";
import { getCoverUrl } from "@/lib/amazon";
import { BookImage } from "@/components/BookImage";
import { useBookQuickView } from "@/context/BookQuickViewContext";

interface CarouselBook {
  title: string;
  author: string;
  isbn?: string;
  description?: string;
}

interface BookCarouselProps {
  title: string;
  books: CarouselBook[];
  linkTo?: string;
  linkLabel?: string;
}

export function BookCarousel({ title, books, linkTo, linkLabel }: BookCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openQuickView } = useBookQuickView();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="book-carousel-section">
      <div className="carousel-header">
        <h2 className="section-title">{title}</h2>
        <div className="carousel-controls">
          {linkTo && (
            <Link href={linkTo} className="carousel-view-all">
              {linkLabel || "View all"} &rarr;
            </Link>
          )}
          <button
            className="carousel-arrow"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <button
            className="carousel-arrow"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="carousel-track" ref={scrollRef}>
        {books.map((book, idx) => (
          <div
            key={`${book.isbn || book.title}-${idx}`}
            onClick={() => openQuickView(book)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") openQuickView(book) }}
            className="carousel-item"
            style={{ cursor: "pointer", outline: "none" }}
          >
            <div className="carousel-cover">
              <BookImage
                src={getCoverUrl(book.isbn || '')}
                isbn={book.isbn || ''}
                alt={book.title}
                author={book.author}
                width={120}
                height={180}
                className="book-cover-img"
                priority={idx < 5}
              />
            </div>
            <div className="carousel-info">
              <strong className="carousel-book-title">{book.title}</strong>
              <span className="carousel-book-author">{book.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
