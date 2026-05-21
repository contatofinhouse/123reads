"use client";

import { ReactNode } from "react";
import { BookQuickViewProvider } from "@/context/BookQuickViewContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <BookQuickViewProvider>
      {children}
    </BookQuickViewProvider>
  );
}
