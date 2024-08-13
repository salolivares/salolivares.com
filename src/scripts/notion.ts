import { Client } from '@notionhq/client';
import { z } from 'astro/zod';

const MediaTypeSchema = z
  .enum(['movie', 'tv', 'book', 'audiobook'])
  .transform((val) => val.toLowerCase() as 'movie' | 'tv' | 'book' | 'audiobook');

const MediaRankingSchema = z.object({
  name: z.string(),
  type: MediaTypeSchema,
  rating: z.number(),
  notes: z.string().optional(),
});

type MediaRanking = z.infer<typeof MediaRankingSchema>;

const MediaDatabasePropertySchema = z.object({
  Name: z.object({ title: z.array(z.object({ plain_text: z.string() })) }),
  Type: z.object({ select: z.object({ name: z.string().transform((val) => val.toLowerCase()) }) }),
  Rating: z.object({ number: z.number() }),
  Notes: z
    .object({
      rich_text: z.array(z.object({ plain_text: z.string() })),
    })
    .optional(),
});

// TODO(sal): this is super brittle to changes.
// - Use the notion api to get the database schema and use that to build the query.
// - Typescript types subpar. properties is untyped. Maybe use zod?
export async function getMediaRankings(): Promise<MediaRanking[]> {
  const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });

  const mediaRankings: MediaRanking[] = [];

  let hasMore = true;
  while (hasMore) {
    const response = await notion.databases.query({
      database_id: import.meta.env.NOTION_MEDIA_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status/Priority',
            select: {
              equals: 'Completed',
            },
          },
          {
            property: 'Type',
            select: {
              is_not_empty: true,
            },
          },
          {
            property: 'Rating',
            number: {
              is_not_empty: true,
            },
          },
        ],
      },
    });

    hasMore = response.has_more;

    for (const result of response.results) {
      try {
        const properties = MediaDatabasePropertySchema.parse(result.properties);

        const mediaRanking = MediaRankingSchema.parse({
          name: properties.Name.title[0].plain_text,
          type: properties.Type.select.name.toLowerCase(),
          rating: properties.Rating.number,
          notes: properties.Notes?.rich_text[0]?.plain_text,
        });

        mediaRankings.push(mediaRanking);
      } catch (error) {
        console.error('Failed to parse result:', error);
      }
    }
  }

  // sort by name
  return mediaRankings.sort((a, b) => a.name.localeCompare(b.name));
}
