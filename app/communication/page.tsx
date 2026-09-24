import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Languages — Israel Oliveira',
  description: 'Languages spoken and communication skills.',
};

const languages = [
  {
    language: 'Portuguese',
    level: 'Native',
    description: 'Mother tongue. Full professional and conversational fluency.',
    progress: 100,
  },
  {
    language: 'English',
    level: 'C1, Advanced',
    description: 'Can understand a wide range of demanding, longer texts, and recognize implicit meaning. Can express ideas fluently and spontaneously without much obvious searching for expressions.',
    progress: 85,
  },
  {
    language: 'French',
    level: 'B2, Upper Intermediate',
    description: 'Can understand the main ideas of complex text on both concrete and abstract topics. Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible.',
    progress: 70,
  },
  {
    language: 'German',
    level: 'B1, Intermediate',
    description: 'Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise while travelling and can describe experiences, events, dreams, and ambitions.',
    progress: 50,
  }
];

export default function CommunicationPage() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <h1 className={styles.h1}>Languages</h1>
        <p className={styles.desc}>
          I believe that understanding different languages is crucial for global collaboration and accessing diverse perspectives.
          Here is an overview of my current language proficiency based on the CEFR standard.
        </p>

        <ul className={styles.list}>
          {languages.map(lang => (
            <li key={lang.language} className={styles.listItem}>
              <p className={styles.itemTitle}>
                <strong>{lang.language}</strong> (<span className={styles.levelName}>{lang.level}</span>)
              </p>
              <p className={styles.description}>{lang.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
