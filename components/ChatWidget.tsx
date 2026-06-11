'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'isobot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.getAttribute('href')?.endsWith('#chat')) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setError('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      
      setMessages(prev => [...prev, { role: 'isobot', text: data.reply }]);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        className={styles.toggleBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? '✕' : '✨'}
      </button>

      {isOpen && (
        <div className={styles.widget}>
          <div className={styles.header}>
            <div>
              <p className={styles.title}>IsoBot</p>
              <p className={styles.subtitle}>AI Assistant</p>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className={styles.messages}>
            {messages.length === 0 && (
              <div className={styles.empty}>
                <p>Hello! I'm IsoBot, Israel's AI assistant. Ask me anything about his resume, skills, or projects.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`${styles.messageWrap} ${m.role === 'user' ? styles.userWrap : styles.isobotWrap}`}>
                <div className={`${styles.bubble} ${m.role === 'user' ? styles.userBubble : styles.isobotBubble}`}>
                  {m.role === 'user' ? (
                    m.text
                  ) : (
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.messageWrap} ${styles.isobotWrap}`}>
                <div className={`${styles.bubble} ${styles.isobotBubble} ${styles.typing}`}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            {error && <div className={styles.error}>{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Ask me anything..." 
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendBtn} disabled={!input.trim() || isLoading}>
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}
