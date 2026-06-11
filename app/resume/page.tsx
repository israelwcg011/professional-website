import type { Metadata } from 'next';
import { SITE_DATA } from '@/lib/data';
import Tag from '@/components/Tag';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resume — Israel Oliveira',
  description: 'Data Scientist & ML Engineer · Brasília, Brazil',
};

export default function ResumePage() {
  const d = SITE_DATA;
  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.h1}>Resume</h1>
        <p className={styles.subtitle}>Data Scientist &amp; ML Engineer · Brasília, Brazil</p>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Experience</p>
          {d.experience.map((e, i) => (
            <div key={i} className={styles.expItem} style={{ borderBottom: i === d.experience.length - 1 ? 'none' : '1px solid var(--border)' }}>
              <div>
                <p className={styles.role}>{e.role}</p>
                <p className={styles.company}>{e.company} · {e.location}</p>
                <p className={styles.desc}>{e.description}</p>
                <div className={styles.techRow}>
                  {e.tech.map(t => <Tag key={t} outline>{t}</Tag>)}
                </div>
              </div>
              <p className={styles.period}>{e.period}</p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Education</p>
          {d.education.map((e, i) => (
            <div key={i} className={styles.eduItem} style={{ borderBottom: i === d.education.length - 1 ? 'none' : '1px solid var(--border)' }}>
              <p className={styles.degree}>{e.degree}</p>
              <p className={styles.institution}>{e.institution} · {e.period}</p>
              <p className={styles.note}>{e.note}</p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Skills</p>
          <div className={styles.skillsGrid}>
            {Object.entries(d.skills).map(([group, skills]) => (
              <div key={group} className={styles.skillGroup}>
                <p className={styles.skillGroupTitle}>{group}</p>
                <div className={styles.skillList}>
                  {skills.map(sk => <Tag key={sk}>{sk}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
