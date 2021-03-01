/* eslint-disable global-require */
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

export interface Frontmatter {
  wordCount: number;
  readingTime: ReturnType<typeof readingTime>;
  slug: string | null;
  [key: string]: any;
}

const root = process.cwd();

export function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type: string, slug?: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: {},
    mdxOptions: {
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontmatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

// export function getAllFilesFrontMatter(type: string) {
//   const files = fs.readdirSync(path.join(root, 'data', type));

//   return files.reduce((allPosts, postSlug) => {
//     const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
//     const { data } = matter(source);

//     return [
//       {
//         ...data,
//         slug: postSlug.replace('.mdx', ''),
//       },
//       ...allPosts,
//     ];
//   }, []);
// }
