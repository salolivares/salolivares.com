/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-restricted-syntax */
import matter from 'gray-matter';

export const getAllPosts = async () => {
  const context = require.context('../posts', false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    // eslint-disable-next-line no-await-in-loop
    const file = await import(`../posts/${post}`);
    const content = matter(file.default);
    posts.push({
      slug: post.replace('.md', ''),
      title: content.data.title,
      date: content.data.date.toJSON(),
    });
  }

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const file = await import(`../posts/${slug}.md`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const content = matter(file.default);

  // cannot serialize date so converting it to string
  const frontmatter: {
    [key: string]: any;
  } = { ...content.data, date: content.data.date.toJSON() };

  return {
    frontmatter,
    markdownBody: content.content,
  };
};
