import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { config } from '../config';

export async function get(context) {
  const posts = await getCollection('blog');
  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
