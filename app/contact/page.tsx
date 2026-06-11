import type { Metadata } from 'next';
import { SITE_DATA } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact — Israel Oliveira',
  description: 'Get in touch for projects, consulting, and ML conversations.',
};

export default function ContactPage() {
  const d = SITE_DATA.personal;

  return (
    <div className={styles.wrap}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h1 className={styles.h1}>Get in<br />touch</h1>
            <p className={styles.desc}>
              I am open to interesting projects, consulting work, and good conversations about AI, Machine Learning, Data Science, and so on. Feel free to reach me out on my social media!
            </p>

            <div className={styles.contactLinks}>
              <a href={`mailto:${d.email}`} className={styles.btnPrimary}>
                Email Me
              </a>
              <a href={d.linkedin.startsWith('http') ? d.linkedin : `https://${d.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                LinkedIn
              </a>
              <a href={d.github.startsWith('http') ? d.github : `https://${d.github}`} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                GitHub
              </a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Contact info</p>
            {[['Email', d.email], ['Location', d.location]].map(([label, val]) => (
              <div key={label} className={styles.infoItem}>
                <p className={styles.infoTitle}>{label}</p>
                <p className={styles.infoValue}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
