import { defineCollection, z } from 'astro:content';

function removeDupes(array: string[]) {
  if (array.length === 0) return array;
  const dedupedItems = new Set(array.map((str) => str.toLowerCase()));
  return Array.from(dedupedItems);
}

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
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
      heroImageAlt: z.string().optional(),
      published: z.boolean().default(false),
    }),
});

const photos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number(),
    published: z.boolean().default(false),
    images: z.array(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        camera: z.string(),
      }),
    ),
  }),
});

export const collections = { blog, photos };
