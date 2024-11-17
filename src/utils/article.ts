import type { CollectionEntry } from "astro:content";
import { isBefore } from "date-fns";

export const compareArticle = (
  a: CollectionEntry<"article">,
  b: CollectionEntry<"article">
): number => (isBefore(a.data.date, b.data.date) ? 1 : -1);
