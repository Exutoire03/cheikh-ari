import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { BlogPost } from '@/types/blog';
import { readBlogData, slugify, BLOG_FILE_PATH } from '@/lib/blog';

export async function GET() {
  try {
    const data = readBlogData();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Impossible de lire les articles' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      metaDescription,
      coverImage,
      publishedAt,
      content,
      slug: inputSlug,
    } = body as {
      title?: string;
      metaDescription?: string;
      coverImage?: string;
      publishedAt?: string;
      content?: unknown;
      slug?: string;
    };

    if (!title?.trim() || !metaDescription?.trim() || content == null) {
      return NextResponse.json(
        { error: 'Titre, meta description et contenu sont requis.' },
        { status: 400 }
      );
    }

    const data = readBlogData();
    const slug =
      (inputSlug && String(inputSlug).trim()) || slugify(String(title).trim());

    if (!slug) {
      return NextResponse.json({ error: 'Slug invalide.' }, { status: 400 });
    }

    if (data.posts.some((p) => p.slug === slug)) {
      return NextResponse.json(
        { error: 'Un article avec ce slug existe déjà.' },
        { status: 409 }
      );
    }

    const post: BlogPost = {
      id: crypto.randomUUID(),
      slug,
      title: String(title).trim(),
      metaDescription: String(metaDescription).trim(),
      coverImage: String(coverImage || '').trim() || '/projects/tsi.PNG',
      publishedAt: publishedAt
        ? new Date(publishedAt).toISOString()
        : new Date().toISOString(),
      content: content as BlogPost['content'],
    };

    data.posts.push(post);
    const dir = path.dirname(BLOG_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(BLOG_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');

    revalidatePath('/blog');
    revalidatePath(`/blog/${slug}`);

    return NextResponse.json({ ok: true, post });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Erreur lors de la publication.' }, { status: 500 });
  }
}
