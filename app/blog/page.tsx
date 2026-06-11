import type { Metadata } from 'next';
import Link from 'next/link';
import Tag from '@/components/Tag';
import { getAllBlogPosts } from '@/lib/mdx';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog — Israel Oliveira',
  description: 'Writing on machine learning, Python, and deep learning architectures.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.h1}>Blog</h1>
        <p className={styles.subtitle}>Writing on machine learning, Python, and deep learning architectures</p>
        <div className={styles.list}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.item}>
              <div className={styles.left}>
                <div className={styles.tags}>
                  {post.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
              <div className={styles.right}>
                <p className={styles.date}>{post.date}</p>
                <p className={styles.readTime}>{post.readTime}</p>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
