import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Wraps getCollection("blog"). Astro's content collections API does not
 * gracefully support a collection with zero entries: getCollection()
 * logs "does not exist or is empty" and resolves to undefined instead of
 * [], which crashes any caller that chains .filter()/.map() on the result.
 * This keeps the site buildable with zero published news.
 */
const getPosts = async (
  filter?: (entry: CollectionEntry<"blog">) => boolean
): Promise<CollectionEntry<"blog">[]> => {
  try {
    return (await getCollection("blog", filter)) ?? [];
  } catch {
    return [];
  }
};

export default getPosts;
