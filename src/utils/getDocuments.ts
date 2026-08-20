import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Wraps getCollection("documents") with the same empty-collection guard
 * as getPosts() — see that file for why this is needed.
 */
const getDocuments = async (): Promise<CollectionEntry<"documents">[]> => {
  try {
    return (await getCollection("documents")) ?? [];
  } catch {
    return [];
  }
};

export default getDocuments;
