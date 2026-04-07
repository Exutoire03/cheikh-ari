import type { JSONContent } from '@tiptap/core';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  content: JSONContent;
};

export type BlogData = {
  posts: BlogPost[];
};
