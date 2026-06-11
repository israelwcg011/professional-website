import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Tag from '@/components/Tag';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import styles from './page.module.css';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllBlogPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.meta.title} — Israel Oliveira`, description: post.meta.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const options: any = {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeKatex,
        [rehypePrettyCode as any, { theme: 'github-dark' }]
      ],
    }
  };

  return (
    <div className={styles.wrap}>
      <div className="container">
        <Link href="/blog" className={styles.back}>← Back to Blog</Link>
        <div className={styles.tags}>
          {post.meta.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <h1 className={styles.h1}>{post.meta.title}</h1>
        <p className={styles.sub}>{post.meta.subtitle}</p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>{post.meta.date}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.metaItem}>{post.meta.readTime}</span>
        </div>
        
        <article className={styles.article}>
          <MDXRemote source={post.content} options={options} />
        </article>
      </div>
    </div>
  );
}
