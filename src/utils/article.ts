import type { CollectionEntry } from "astro:content";
import { isBefore } from "date-fns";

export type Article = CollectionEntry<"article">;

export const compareArticle = (a: Article, b: Article): number =>
  isBefore(a.data.date, b.data.date) ? 1 : -1;
