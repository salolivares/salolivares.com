import { config } from '@/site.config';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import type { APIContext, GetStaticPathsResult } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';

const INTER_REGULAR = './node_modules/@fontsource/inter/files/inter-latin-400-normal.woff';
const INTER_BOLD = './node_modules/@fontsource/inter/files/inter-latin-700-normal.woff';

const PAPER = '#f3efe7';
const INK = '#242322';
const MUTED = '#6a6a6a';
const BORDER = '#c7c7c7';
const ACCENT = '#2a5cd8';

interface Props {
  title: string;
  pubDate: Date;
}

export async function GET(context: APIContext) {
  const { title, pubDate } = context.props as Props;
  const date = pubDate.toISOString().slice(0, 10);

  const [avatarBuffer, interRegular, interBold] = await Promise.all([
    readFile('./public/images/avatar.png'),
    readFile(INTER_REGULAR),
    readFile(INTER_BOLD),
  ]);
  const avatar = `data:image/png;base64,${avatarBuffer.toString('base64')}`;

  const markup = html`<div
    tw="flex flex-col w-full h-full items-stretch justify-center p-10"
    style=${{ backgroundColor: PAPER, color: INK }}
  >
    <div
      tw="flex flex-col w-full h-full p-16 justify-between border"
      style=${{ borderColor: BORDER, backgroundColor: '#ffffff' }}
    >
      <div tw="flex flex-col">
        <div tw="text-2xl mb-8" style=${{ color: MUTED, letterSpacing: '0.12em' }}>
          POST · ${date}
        </div>
        <div tw="text-6xl font-bold leading-snug">${title}</div>
      </div>
      <div tw="flex w-full justify-between items-end">
        <div tw="text-2xl" style=${{ color: ACCENT, textDecoration: 'underline' }}>
          salolivares.com
        </div>
        <div tw="flex items-center">
          <img src="${avatar}" tw="w-16 mr-4" />
          <div tw="flex flex-col">
            <div tw="font-bold text-2xl">sal olivares</div>
            <div tw="text-xl" style=${{ color: MUTED }}>@0x102c</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  const svg = await satori(markup, {
    width: config.ogImageWidth,
    height: config.ogImageHeight,
    fonts: [
      {
        name: 'Inter',
        data: interRegular.buffer,
        weight: 400,
      },
      {
        name: 'Inter',
        data: interBold.buffer,
        weight: 700,
      },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: config.ogImageWidth } })
    .render()
    .asPng();

  return new Response(png);
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { title: post.data.title, pubDate: post.data.updatedDate ?? post.data.pubDate },
  }));
}
