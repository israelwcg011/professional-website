'use client';

import { useTheme, THEMES, ThemeKey } from './ThemeProvider';
import styles from './TweaksPanel.module.css';

interface Props { onClose: () => void; }

export default function TweaksPanel({ onClose }: Props) {
  const { theme, fontSize, setTheme, setFontSize } = useTheme();

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <p className={styles.title}>Tweaks</p>
        <button className={styles.close} onClick={onClose} aria-label="Close tweaks">✕</button>
      </div>
      <span className={styles.label}>Style</span>
      {(Object.entries(THEMES) as [ThemeKey, string][]).map(([key, name]) => (
        <button
          key={key}
          className={`${styles.themeBtn} ${theme === key ? styles.active : ''}`}
          onClick={() => setTheme(key)}
        >
          {name}
        </button>
      ))}
      <span className={styles.label}>Font size</span>
      <div className={styles.sizeOptions}>
        <button className={`${styles.sizeBtn} ${fontSize === 15 ? styles.active : ''}`} onClick={() => setFontSize(15)}>Small</button>
        <button className={`${styles.sizeBtn} ${fontSize === 17 ? styles.active : ''}`} onClick={() => setFontSize(17)}>Medium</button>
        <button className={`${styles.sizeBtn} ${fontSize === 19 ? styles.active : ''}`} onClick={() => setFontSize(19)}>Large</button>
      </div>
    </div>
  );
}
