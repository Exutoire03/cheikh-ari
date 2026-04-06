import type { Metadata } from 'next';
import { getPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog — Cheikh Ari',
  description:
    'Articles sur le développement web, React, Next.js et mes projets.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-300 font-sans pt-28 pb-24">
      <div
        className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:bg-black"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(14, 165, 233, 0.12), rgba(255, 255, 255, 0))',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 tracking-tighter">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tutoriels, retours d&apos;expérience et veille autour du développement web.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400 py-16">
            Aucun article pour le moment.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
