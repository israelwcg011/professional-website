import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPortfolioProjects, getPortfolioProjectById } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Tag from '@/components/Tag';
import styles from './page.module.css';

interface Props { params: Promise<{ id: string }>; }

export async function generateStaticParams() {
  return getAllPortfolioProjects().map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getPortfolioProjectById(id);
  if (!p) return {};
  return { title: `${p.meta.title} — Israel Oliveira`, description: p.meta.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const p = getPortfolioProjectById(id);
  if (!p) notFound();

  return (
    <div className={styles.wrap}>
      <div className="container">
        <Link href="/portfolio" className={styles.back}>← Back to Portfolio</Link>
        <div className={styles.eyebrow}>
          {p.meta.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <h1 className={styles.h1}>{p.meta.title}</h1>
        <p className={styles.sub}>{p.meta.subtitle}</p>
        <div className={styles.grid}>
          <div className={styles.markdownContent}>
            <MDXRemote source={p.content} />
          </div>
          <div>
            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Tech Stack</p>
              <div className={styles.techList}>
                {p.meta.tech.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Details</p>
              <p className={styles.metaRow}>Year: <strong>{p.meta.year}</strong></p>
              <p className={styles.metaRow}>
                Status: <strong style={{ color: p.meta.status === 'Active' ? 'oklch(45% 0.15 150)' : 'var(--text-muted)' }}>{p.meta.status}</strong>
              </p>
              {p.meta.github && (
                <a href={p.meta.github.startsWith('http') ? p.meta.github : `https://${p.meta.github}`} target="_blank" rel="noopener noreferrer" className={styles.metaLink} style={{display: 'block'}}>
                  {p.meta.github.replace(/^https?:\/\//, '')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
