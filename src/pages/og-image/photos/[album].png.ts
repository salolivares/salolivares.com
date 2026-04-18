import { config } from '@/site.config';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import type { APIContext, GetStaticPathsResult } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';

const INTER_REGULAR = './node_modules/@fontsource/inter/files/inter-latin-400-normal.woff';
const INTER_BOLD = './node_modules/@fontsource/inter/files/inter-latin-700-normal.woff';

interface Props {
  title: string;
  year: number;
}

export async function GET(context: APIContext) {
  const { title, year } = context.props as Props;

  const [avatarBuffer, interRegular, interBold] = await Promise.all([
    readFile('./public/images/avatar.png'),
    readFile(INTER_REGULAR),
    readFile(INTER_BOLD),
  ]);
  const avatar = `data:image/png;base64,${avatarBuffer.toString('base64')}`;

  const markup = {
    type: 'div',
    props: {
      tw: 'flex flex-col w-full h-full items-center justify-center bg-white',
      children: [
        {
          type: 'div',
          props: {
            tw: 'flex flex-col w-full h-4/5 p-10 justify-center',
            children: [
              {
                type: 'div',
                props: { tw: 'text-3xl font-normal mb-10', children: String(year) },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-6xl font-bold leading-snug tracking-tight',
                  children: title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'flex w-full h-1/5 px-10 pb-10 justify-between',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-3xl font-normal items-center',
                  style: { textDecoration: 'underline', textUnderlineOffset: '12px' },
                  children: 'salolivares.com',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'flex items-center',
                  children: [
                    {
                      type: 'img',
                      props: { src: avatar, tw: 'w-20 mr-5' },
                    },
                    {
                      type: 'div',
                      props: {
                        tw: 'flex flex-col',
                        children: [
                          {
                            type: 'div',
                            props: { tw: 'font-bold text-3xl', children: 'sal olivares' },
                          },
                          {
                            type: 'div',
                            props: { tw: 'text-2xl', children: '@0x102c' },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

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
  const albums = await getCollection('photos');
  return albums.map((album) => ({
    params: { album: album.id },
    props: { title: album.data.title, year: album.data.year },
  }));
}
