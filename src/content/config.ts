import { defineCollection, z } from 'astro:content';

function removeDupes(array: string[]) {
  if (array.length === 0) return array;
  const dedupedItems = new Set(array.map((str) => str.toLowerCase()));
  return Array.from(dedupedItems);
}

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      tags: z.array(z.string()).default([]).transform(removeDupes),
      heroImage: image().optional(),
      published: z.boolean().default(false),
    }),
});

export const collections = { blog };
