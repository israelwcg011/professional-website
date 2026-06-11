import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackgroundGlow from '@/components/BackgroundGlow';
import PageTransition from '@/components/PageTransition';
// import ChatWidget from '@/components/ChatWidget';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Israel Oliveira — Data Scientist & AI Engineer',
  description: 'Portfolio of Israel Oliveira, Data Scientist and AI Engineer based in São Paulo, Brazil.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
      </head>
      <body>
        <BackgroundGlow />
        <ThemeProvider>
          <Nav />
          <PageTransition>
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{children}</main>
          </PageTransition>
          <Footer />
          {/* <ChatWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
