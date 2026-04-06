import fs from 'fs';
import path from 'path';
import type { BlogData, BlogPost } from '@/types/blog';

export const BLOG_FILE_PATH = path.join(process.cwd(), 'src/data/blog/posts.json');

const emptyData: BlogData = { posts: [] };

export function readBlogData(): BlogData {
  try {
    if (!fs.existsSync(BLOG_FILE_PATH)) {
      return emptyData;
    }
    const raw = fs.readFileSync(BLOG_FILE_PATH, 'utf8');
    const parsed = JSON.parse(raw) as BlogData;
    if (!parsed?.posts || !Array.isArray(parsed.posts)) {
      return emptyData;
    }
    return parsed;
  } catch {
    return emptyData;
  }
}

export function getPosts(): BlogPost[] {
  const { posts } = readBlogData();
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return readBlogData().posts.find((p) => p.slug === slug);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}
