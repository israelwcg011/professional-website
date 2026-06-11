import styles from './Footer.module.css';
import { SITE_DATA } from '@/lib/data';

const FOOTER_LINKS = [
  [SITE_DATA.personal.linkedin, 'LinkedIn'],
  [SITE_DATA.personal.github, 'GitHub'],
  [`mailto:${SITE_DATA.personal.email}`, 'Email'],
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.name}>Israel Oliveira</span>
          <div className={styles.links}>
            {FOOTER_LINKS.map(([href, label]) => (
              <a key={href} href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
          <span className={styles.copy}>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
