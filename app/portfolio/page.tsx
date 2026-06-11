import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPortfolioProjects } from '@/lib/mdx';
import Tag from '@/components/Tag';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio — Israel Oliveira',
  description: 'Selected work in ML, AI systems, and open-source.',
};

export default function PortfolioPage() {
  const projects = getAllPortfolioProjects();

  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.h1}>Portfolio</h1>
        <p className={styles.subtitle}>Selected work in ML, AI systems, and open-source</p>
        <div className={styles.grid}>
          {projects.map(p => (
            <Link key={p.id} href={`/portfolio/${p.id}`} className={styles.card}>
              <div className={styles.tags}>
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <p className={styles.title}>{p.title}</p>
              <p className={styles.sub}>{p.subtitle}</p>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.footer}>
                <div className={styles.meta}>
                  <span className={styles.year}>{p.year}</span>
                  <span className={styles.dot}>·</span>
                  <span className={`${styles.status} ${p.status === 'Active' ? styles.active : ''}`}>{p.status}</span>
                </div>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
