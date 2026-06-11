import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_DATA } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — Israel Oliveira',
  description: 'Data Scientist and ML Engineer based in Brasília, Brazil.',
};

export default function AboutPage() {
  const d = SITE_DATA.personal;
  return (
    <div className={styles.wrap}>
      <div className="container">
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.h1}>From first principles<br />to production systems</h1>
        <div className={styles.grid}>
          <div>
            {d.bio.split('\n\n').map((para, i) => (
              <p key={i} className={styles.bio} style={{ marginBottom: i < 2 ? 28 : 0 }}>{para}</p>
            ))}
            <div className={styles.btnRow}>
              <Link href="/resume" className={styles.btnPrimary}>View Resume</Link>
              <Link href="/contact" className={styles.btnSecondary}>Get in touch</Link>
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.sideCard}>
              <p className={styles.sideLabel}>Contact</p>
              {[['✉', d.email], ['📍', d.location]].map(([icon, val]) => (
                <p key={val} className={styles.sideItem}><span>{icon}</span><span>{val}</span></p>
              ))}
            </div>
            <div className={styles.sideCard}>
              <p className={styles.sideLabel}>Links</p>
              {[['GitHub', d.github], ['LinkedIn', d.linkedin]].map(([label, val]) => (
                <p key={label} className={styles.sideItem}>
                  <a href={val.startsWith('http') ? val : `https://${val}`} target="_blank" rel="noopener noreferrer" className={styles.accentLink}>
                    {val.replace(/^https?:\/\//, '')}
                  </a>
                </p>
              ))}
            </div>
            <div className={styles.sideCard}>
              <p className={styles.sideLabel}>Top Skills</p>
              {['Python', 'PyTorch', 'LangChain', 'Apache Spark', 'Kubernetes'].map(sk => (
                <p key={sk} className={styles.skillItem}>
                  <span className={styles.dot} />
                  {sk}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
