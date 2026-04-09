import { getCollection, getEntry, render } from 'astro:content';

export type FeedItemType = 'now';

export type FeedItem = {
  type: FeedItemType;
  id: string;
  pubDate: Date;
};

export const FEED_TYPES: FeedItemType[] = ['now'];

export async function getFeedItems(
  typeFilter?: FeedItemType,
): Promise<FeedItem[]> {
  const items: FeedItem[] = [];

  if (!typeFilter || typeFilter === 'now') {
    const nowPosts = await getCollection('now', ({ data }) => {
      return import.meta.env.PROD ? data.published === true : true;
    });
    items.push(
      ...nowPosts.map((post) => ({
        type: 'now' as const,
        id: post.id,
        pubDate: post.data.pubDate,
      })),
    );
  }

  return items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}

export function getPermalink(item: FeedItem): string {
  return `/${item.type}/${item.id}`;
}

export async function renderFeedItem(item: FeedItem) {
  switch (item.type) {
    case 'now': {
      const entry = await getEntry('now', item.id);
      return render(entry!);
    }
  }
}
