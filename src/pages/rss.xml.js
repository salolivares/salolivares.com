import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { config } from '../site.config';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: posts
      .filter((post) => post.data.published)
      .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
      .map((post) => ({
        ...post.data,
        link: `/blog/${post.id}/`,
      })),
  });
}
