"use client"; // Nécessaire pour utiliser useState

import Image from 'next/image';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

// Correction des IDs pour qu'ils soient uniques
const projects = [
  { id: 1, title: 'Générateur de bio avec IA', description: 'Une application web de génération de bio inspirantes en temps réel grâce à une IA.', image: '/projects/a-bio.PNG', tags: ['Next.js', 'Tailwind CSS', 'IA'], link: 'https://quotes-eight-red.vercel.app/' },
  { id: 2, title: 'Site vitrine du restaurant Corazon', description: 'Site vitrine moderne et responsive pour le restaurant Corazon, mettant en avant son ambiance unique.', image: '/projects/corazon.PNG', tags: ['Next.js', 'Tailwind CSS'], link: 'https://corazon-flax.vercel.app/' },
  { id: 3, title: 'Application de newsletter', description: 'Système de collecte d\'e-mails simple et efficace pour une newsletter.', image: '/projects/a-news.PNG', tags: ['React', 'Node.js'], link: 'https://newsletter-ari.vercel.app/' },
  { id: 4, title: 'Plateforme étudiants-entreprises', description: 'Plateforme innovante de mise en relation entre étudiants et entreprises.', image: '/projects/a-eig.PNG', tags: ['Next.js', 'Tailwind CSS', 'Supabase'], link: 'https://eig-soutenance.vercel.app/' },
  { id: 5, title: 'Générateur de mot de passe', description: 'Application de génération de mots de passe aléatoires et sécurisés.', image: '/projects/a-pw.PNG', tags: ['Next.js', 'Tailwind CSS'], link: 'https://random-password-silk.vercel.app/' },
  { id: 6, title: 'Générateur de citations', description: 'Générateur de citations inspirantes pour trouver la motivation quotidienne.', image: '/projects/a-quotes.PNG', tags: ['Next.js', 'Tailwind CSS'], link: 'http://quote-spark-ignite-now.lovable.app/' }
];

// Catégories pour les filtres. "Tous" est la valeur par défaut.
const filterCategories = ['Tous', 'Next.js', 'React', 'Supabase', 'IA'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="relative min-h-screen bg-black text-slate-300 font-sans pt-28 pb-24"> {/* Ajout de 'relative' ici */}
      {/* Fond décoratif subtil, comme sur les autres pages */}
      <div 
        className="absolute top-0 left-0 -z-10 h-full w-full bg-black"
        style={{backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(14, 165, 233, 0.15), rgba(255, 255, 255, 0))'}}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Section Titre --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 tracking-tighter">
            Mes Projets
          </h1>
          <p className="text-lg md:text-xl text-slate-400">
            Une exploration de mon travail à travers une sélection de réalisations.
          </p>
        </div>

        {/* --- Section Filtres --- */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' 
                  : 'bg-gray-800/80 text-slate-300 hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Grille des Projets --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-gray-950 border border-gray-800
                         transition-all duration-300 ease-in-out hover:border-sky-500/50 hover:-translate-y-1.5"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-100">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-sky-300 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed text-sm
                            transition-all duration-300 ease-in-out
                            opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"> {/* Suppression de 'flex-grow' ici */}
                  {project.description}
                </p>

                <div className="mt-auto">
                   <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-400 font-semibold text-sm
                               transition-all duration-300
                               opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    Voir le projet
                    <FiArrowUpRight className="transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}