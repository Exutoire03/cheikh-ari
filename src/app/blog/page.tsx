'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Types pour les articles
interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const BlogPage = () => {
  // Exemple d'articles (à remplacer par vos vrais articles)
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Débuter mon projet personnel',
      description: 'Comment j\'ai commencé à développer mon portfolio et les défis rencontrés.',
      date: '23 Avril 2025',
      image: '/images/blog/post1.jpg',
      category: 'Développement',
      readTime: '5 min',
    },
    {
      id: '2',
      title: 'Les technologies utilisées',
      description: 'Découvrez les technologies et frameworks que j\'ai choisis pour ce projet.',
      date: '22 Avril 2025',
      image: '/images/blog/post2.jpg',
      category: 'Technologie',
      readTime: '4 min',
    },
    // Ajoutez d'autres articles ici
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* En-tête */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-600/30" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,black,transparent)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Blog
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Suivez l&apos;évolution de mon projet et découvrez mes réflexions sur le développement web.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-purple-400 bg-purple-900/50 rounded-full mb-2">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">&bull;</span>
                      <span>{post.readTime} de lecture</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center text-purple-400 font-medium">
                      Lire l&apos;article
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
