/* eslint-disable global-require */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';
import MDXComponents from '../components/MDXComponents';

export interface Frontmatter {
  slug: string | null;
  title?: string;
  publishedOn?: string;
  updatedOn?: string;
  summary?: string;
  [key: string]: any;
}

export interface EnhancedFrontmatter extends Frontmatter {
  wordCount: number;
  readingTime: ReturnType<typeof readingTime>;
}

const root = process.cwd();

export function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(
  type: string,
  slug?: string,
): Promise<{ mdxSource: MdxRemote.Source; frontmatter: EnhancedFrontmatter }> {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
      rehypePlugins: [require('mdx-prism')],
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

export function getAllFilesFrontMatter(type: string): Frontmatter[] {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce<Frontmatter[]>((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}
