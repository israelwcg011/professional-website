import type { Metadata } from 'next';
import { SITE_DATA } from '@/lib/data';
import Tag from '@/components/Tag';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Certificates — Israel Oliveira',
  description: 'Professional certifications and continuing education credentials.',
};

export default function CertificatesPage() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.h1}>Certificates</h1>
        <p className={styles.subtitle}>Professional certifications and continuing education</p>
        
        {SITE_DATA.certificates.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🚧</span>
            <p>This section is currently under construction. Please check back later!</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {SITE_DATA.certificates.map(cert => (
              <a 
                key={cert.id} 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.card}
              >
                <h2 className={styles.title}>{cert.title}</h2>
                <p className={styles.issuer}>{cert.issuer}</p>
                
                <div className={styles.tags}>
                  {cert.skills.map(skill => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
                
                <div className={styles.footer}>
                  <span className={styles.date}>{cert.date}</span>
                  <span className={styles.linkBox}>
                    Verify Credential <span className={styles.arrow}>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
