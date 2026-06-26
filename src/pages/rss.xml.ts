import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Jamie Shiers',
    description: 'Writing about aerospace manufacturing, quality management systems, cyber security, and operations.',
    site: context.site!,
    items: posts.map(post => ({
      title:       post.data.title,
      description: post.data.description,
      pubDate:     post.data.pubDate,
      link:        `/blog/${post.slug}/`,
      categories:  [post.data.category],
    })),
    customData: `<language>en-gb</language>`,
  });
}
