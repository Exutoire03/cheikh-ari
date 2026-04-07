import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import type { BlogPost } from '@/types/blog';

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const isExternal =
    post.coverImage.startsWith('http://') || post.coverImage.startsWith('https://');

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-1">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-200 dark:bg-gray-900"
      >
        {isExternal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </Link>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <FiCalendar className="shrink-0" aria-hidden />
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {post.metaDescription}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm mt-auto
                     group-hover:gap-3 transition-all"
        >
          Lire l&apos;article
          <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
