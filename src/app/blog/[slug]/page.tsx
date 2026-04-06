import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { getPostBySlug, getPosts } from '@/lib/blog';
import { generateBlogHtml } from '@/lib/blog-html';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Article introuvable' };
  return {
    title: `${post.title} — Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = generateBlogHtml(post.content);
  const isExternal =
    post.coverImage.startsWith('http://') || post.coverImage.startsWith('https://');

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-300 font-sans pt-28 pb-24">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium mb-10 hover:underline"
        >
          <FiArrowLeft />
          Retour au blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <FiCalendar aria-hidden />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tighter mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">{post.metaDescription}</p>
        </header>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-12 bg-gray-100 dark:bg-gray-900">
          {isExternal ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          )}
        </div>

        <div
          className="blog-article-content max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}
