'use client';

import React from 'react';
import Image from 'next/image';

const ExutoirePage = () => {
  const sections = [
    {
      title: "Section 1",
      description: "Description de la première section. Vous pouvez ajouter votre texte ici.",
      image: "/images/section1.jpg",
      link: "https://example.com/1",
      reverse: false,
    },
    {
      title: "Section 2",
      description: "Description de la deuxième section. Vous pouvez ajouter votre texte ici.",
      image: "/images/section2.jpg",
      link: "https://example.com/2",
      reverse: true,
    },
    {
      title: "Section 3",
      description: "Description de la troisième section. Vous pouvez ajouter votre texte ici.",
      image: "/images/section3.jpg",
      link: "https://example.com/3",
      reverse: false,
    },
    {
      title: "Section 4",
      description: "Description de la quatrième section. Vous pouvez ajouter votre texte ici.",
      image: "/images/section4.jpg",
      link: "https://example.com/4",
      reverse: true,
    },
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
              Mon Exutoire
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Découvrez mon espace personnel où je partage mes passions, mes inspirations et mes créations.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-24 ${index !== sections.length - 1 ? 'border-b border-gray-800' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Contenu */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {section.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {section.description}
                </p>
                <div>
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    En savoir plus
                    <svg
                      className="ml-2 w-5 h-5"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default ExutoirePage;
