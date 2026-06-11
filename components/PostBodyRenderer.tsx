import styles from './PostBodyRenderer.module.css';

interface Props { content: string; }

export default function PostBodyRenderer({ content }: Props) {
  const blocks = content.split('\n\n');

  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i} className={styles.h2}>{block.slice(3)}</h2>;
        }
        if (block.startsWith('```')) {
          const code = block.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
          return <pre key={i} className={styles.code}>{code}</pre>;
        }
        return <p key={i} className={styles.p}>{block}</p>;
      })}
    </div>
  );
}
