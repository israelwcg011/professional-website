import type { Metadata } from 'next';
import { SITE_DATA } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Talks — Israel Oliveira',
  description: 'Conferences, workshops, and public appearances.',
};

export default function TalksPage() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.h1}>Talks &amp; Publications</h1>
        <p className={styles.subtitle}>Conferences, workshops, and public appearances</p>
        {SITE_DATA.talks.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🚧</span>
            <p>This section is currently under construction. Please check back later!</p>
          </div>
        ) : (
          <div className={styles.list}>
            {SITE_DATA.talks.map(t => (
              <div key={t.id} className={styles.item}>
                <div>
                  <p className={styles.type}>{t.type}</p>
                  <p className={styles.title}>{t.title}</p>
                  <p className={styles.event}>{t.event}</p>
                  <p className={styles.desc}>{t.description}</p>
                  <div className={styles.links}>
                    {t.slides && <span className={styles.link}>Slides →</span>}
                    {t.video && <span className={styles.link}>Video →</span>}
                  </div>
                </div>
                <div className={styles.right}>
                  <p className={styles.date}>{t.date}</p>
                  <p className={styles.location}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
