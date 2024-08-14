import { config } from '@/site.config';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import type { APIContext, GetStaticPathsResult } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import InterRegular from '@fontsource/inter/files/inter-latin-400-normal.woff';
import InterBold from '@fontsource/inter/files/inter-latin-700-normal.woff';
import { html } from 'satori-html';

interface Props {
  title: string;
  pubDate: Date;
}

export async function GET(context: APIContext) {
  const { title, pubDate } = context.props as Props;
  const date = pubDate.toLocaleDateString('en-US', {
    dateStyle: 'full',
  });

  const avatarBuffer = await readFile('./public/images/avatar.png');
  const avatar = `data:image/png;base64,${avatarBuffer.toString('base64')}`;

  const markup = html`<div tw="flex flex-col w-full h-full items-center justify-center bg-white">
    <div tw="flex flex-col w-full h-4/5 p-10 justify-center">
      <div tw="text-3xl font-normal mb-10">${date}</div>
      <div tw="text-6xl font-bold leading-snug tracking-tight">${title}</div>
    </div>
    <div tw="flex w-full h-1/5 px-10 pb-10 justify-between">
      <div tw="text-3xl font-normal items-center" style={{ textDecoration: 'underline' }}>salolivares.com</div>
      <div tw="flex items-center">
        <img src="${avatar}" tw="w-20 mr-5" />
        <div tw="flex flex-col">
          <div tw="font-bold text-3xl">sal olivares</div>
          <div tw="text-2xl">@0x102c</div>
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
        data: Buffer.from(InterRegular),
        weight: 400,
      },
      {
        name: 'Inter',
        data: Buffer.from(InterBold),
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
    params: { slug: post.slug },
    props: { title: post.data.title, pubDate: post.data.updatedDate ?? post.data.pubDate },
  }));
}
