/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-restricted-syntax */
import matter from 'gray-matter';

type PostParams = { year: string; month: string; day: string; slug: string };

// ! Assume filename of YYYY-XX-DD-TITLE........
const parsePostfilename = (filename: string): PostParams => {
  const date = filename.split('-');
  const slug = date.slice(3).join('-').replace('.md', '');

  return {
    year: date[0],
    month: date[1],
    day: date[2],
    slug,
  };
};

export const getAllPosts = async (): Promise<{ params: PostParams; title: string; date: string }[]> => {
  const context = require.context('../posts', false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const postFilename = key.slice(2);
    // eslint-disable-next-line no-await-in-loop
    const file = await import(`../posts/${postFilename}`);
    const content = matter(file.default);

    const params = parsePostfilename(postFilename);

    posts.push({
      params,
      title: content.data.title,
      date: content.data.date.toJSON(),
    });
  }

  return posts;
};

export const getPost = async ({ year, month, day, slug }: PostParams) => {
  const file = await import(`../posts/${year}-${month}-${day}-${slug}.md`);
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
