import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

export interface ProjectMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  tags: string[];
  github?: string;
  year: string;
  status: 'Active' | 'Archived';
}

export interface Project {
  meta: ProjectMeta;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<BlogPostMeta, 'slug'>),
      };
    });

  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    meta: {
      slug,
      ...(matterResult.data as Omit<BlogPostMeta, 'slug'>),
    },
    content: matterResult.content,
  };
}

export function getAllPortfolioProjects(): ProjectMeta[] {
  if (!fs.existsSync(portfolioDirectory)) return [];

  const fileNames = fs.readdirSync(portfolioDirectory);
  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(portfolioDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as Omit<ProjectMeta, 'id'>),
      };
    });

  // Sort by year (descending)
  return allProjectsData.sort((a, b) => (parseInt(a.year) < parseInt(b.year) ? 1 : -1));
}

export function getPortfolioProjectById(id: string): Project | null {
  const fullPath = path.join(portfolioDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    meta: {
      id,
      ...(matterResult.data as Omit<ProjectMeta, 'id'>),
    },
    content: matterResult.content,
  };
}
