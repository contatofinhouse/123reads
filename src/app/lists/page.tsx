import { influencers } from "@/data/influencers";
import { thematicLists } from "@/data/thematic-lists";
import type { Metadata } from "next";
import { ListsIndexPage } from "./ListsIndexPage";

export const metadata: Metadata = {
  title: "Curated Book Lists",
  description: "Browse book recommendations from 20 world-class influencers and 8 expertly curated thematic reading lists.",
};

export default function ListsPage() {
  return (
    <ListsIndexPage
      influencers={influencers.map(i => ({ name: i.name, slug: i.slug, bio: i.bio, image: i.image, category: i.category, bookCount: i.books.length }))}
      thematicLists={thematicLists.map(t => ({ title: t.title, slug: t.slug, description: t.description, image: t.image, category: t.category, bookCount: t.books.length }))}
    />
  );
}
