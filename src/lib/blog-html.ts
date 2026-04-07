import { generateHTML } from '@tiptap/html';
import type { JSONContent } from '@tiptap/core';
import { blogExtensions } from '@/lib/blog-extensions';

export function generateBlogHtml(content: JSONContent): string {
  try {
    if (!content || typeof content !== 'object') {
      return '<p>Contenu indisponible.</p>';
    }
    return generateHTML(content, blogExtensions);
  } catch {
    return '<p>Impossible d’afficher cet article.</p>';
  }
}
