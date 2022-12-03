import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import { readdirSync, readFileSync } from 'fs'
import { bundleMDX } from 'mdx-bundler'

export interface Frontmatter {
  slug: string | null
  title?: string
  publishedOn?: string
  updatedOn?: string
  summary?: string
  [key: string]: unknown
}

export interface EnhancedFrontmatter extends Frontmatter {
  wordCount: number
  readingTime: ReturnType<typeof readingTime>
}

export function getFiles(type: string) {
  return readdirSync(path.join(process.cwd(), 'data', type))
}

export async function getFileBySlug(
  type: string,
  slug?: string
): Promise<{ code: string; frontmatter: EnhancedFrontmatter }> {
  const source = slug
    ? readFileSync(path.join(process.cwd(), 'data', type, `${slug}.mdx`), 'utf8')
    : readFileSync(path.join(process.cwd(), 'data', `${type}.mdx`), 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism
      ]
      return options
    }
  })

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  }
}

export function getAllFilesFrontMatter(type: string): Frontmatter[] {
  const files = readdirSync(path.join(process.cwd(), 'data', type))

  return files.reduce<Frontmatter[]>((allPosts, postSlug) => {
    const source = readFileSync(path.join(process.cwd(), 'data', type, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ]
  }, [])
}
