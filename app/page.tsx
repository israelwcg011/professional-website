import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_DATA } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Israel Oliveira',
  description: SITE_DATA.personal.tagline,
};

const HIGHLIGHTS = [
  { label: 'Resume', desc: '7 years building data-driven solutions', href: '/resume' },
  { label: 'Blog', desc: 'Writing on ML-AI Engineering, and Data Science', href: '/blog' },
  { label: 'Portfolio', desc: 'Open-source and industry projects', href: '/portfolio' },
];

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Data Scientist &amp; ML Engineer</p>
            <h1 className={styles.h1}>Israel<br />Oliveira</h1>
            <p className={styles.tagline}>{SITE_DATA.personal.tagline}</p>
          </div>

          <div className={styles.heroNav}>
            {HIGHLIGHTS.map(h => (
              <Link key={h.href} href={h.href} className={styles.navButton}>
                <div>
                  <span className={styles.navLabel}>{h.label}</span>
                  <span className={styles.navDesc}>{h.desc}</span>
                </div>
                <span className={styles.navArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
