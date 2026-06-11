'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import TweaksPanel from './TweaksPanel';

const NAV_LINKS = [
  ['about', 'About'],
  ['resume', 'Resume'],
  ['blog', 'Blog'],
  ['portfolio', 'Portfolio'],
  ['certificates', 'Certificates'],
  ['communication', 'Languages'],
  ['talks', 'Talks'],
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showTweaks, setShowTweaks] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>Israel Oliveira</Link>

            {/* Desktop links */}
            <div className={styles.links}>
              {NAV_LINKS.map(([id, label]) => (
                <Link
                  key={id}
                  href={`/${id}`}
                  className={`${styles.link} ${pathname.startsWith(`/${id}`) ? styles.active : ''}`}
                >
                  {label}
                </Link>
              ))}
              <Link href="/contact" className={styles.cta}>Contact</Link>
              <div style={{ position: 'relative' }}>
                <button
                  className={styles.tweaksBtn}
                  onClick={() => setShowTweaks(p => !p)}
                  aria-label="Toggle tweaks panel"
                >
                  ⚙
                </button>
                {showTweaks && <TweaksPanel onClose={() => setShowTweaks(false)} />}
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(p => !p)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            <div className="container">
              {NAV_LINKS.map(([id, label]) => (
                <Link
                  key={id}
                  href={`/${id}`}
                  className={`${styles.mobileLink} ${pathname.startsWith(`/${id}`) ? styles.active : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
