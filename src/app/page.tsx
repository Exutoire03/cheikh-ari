import Image from 'next/image';
import Link from 'next/link';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';


export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Générateur de bio avec ia',
      description: 'Une application web de génération de bio inspirantes en temps réel grace à une ia',
      image: '/projects/a-bio.PNG',
      tags: ['Next.js', 'Tailwind CSS', 'Gemini'],
      link: 'https://quotes-eight-red.vercel.app/'
    },
    {
    id: 2, // ID unique corrigé
    title: 'Site vitrine du restaurant Corazon',
    description: 'Site vitrine du restaurant Corazon',
    image: '/projects/corazon.PNG',
    tags: ['React', 'Node.js'],
    link: 'https://corazon-flax.vercel.app/'
  },
    {
      id: 3, // ID unique
      title: 'Plateforme de mis en relation entre étudiants et entreprises',
      description: 'Plateforme innovante de mise en relation entre étudiants et entreprise',
      image: '/projects/a-eig.PNG',
      tags: ['React', 'Tailwind CSS', 'Supabase'],
      link: 'https://eig-soutenance.vercel.app/'
    },
  ];
  

  const skills = [
    { name: 'React', icon: <FaReact size={48} className="mx-auto" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={48} className="mx-auto" /> },
    { name: 'TypeScript', icon: <SiTypescript size={48} className="mx-auto" /> },
    { name: 'Node.js', icon: <FaNodeJs size={48} className="mx-auto" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="mx-auto" /> },
    // Ajoutez d'autres compétences ici
  ];
  

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-0"></div>
        <div className="max-w-[2000px] mx-auto px-8 lg:px-16 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
              Développeur Web Créatif
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transformant des idées en expériences web exceptionnelles
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#projects"
                className="px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300
                         text-white font-semibold text-lg hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Voir mes projets
              </a>
              <a
                href="https://wa.me/message/4MR4JID7X4ZEG1"
                className="px-10 py-4 border-2 border-purple-600 hover:border-purple-500 rounded-full
                         transition-all duration-300 text-white font-semibold text-lg
                         hover:bg-purple-600/10 hover:transform hover:scale-105"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-gradient-to-b from-black/80 to-black">
        <div className="max-w-[2000px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mes Compétences
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              Les technologies que j&apos;utilise pour donner vie à vos projets.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="group relative p-8 rounded-xl bg-gray-900/60 border border-white/10
                        backdrop-blur-sm transition-all duration-300 ease-in-out
                        hover:border-purple-500/50 hover:bg-gray-900/80 hover:-translate-y-2
                        hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-4">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold text-gray-200 text-center tracking-wider">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-black to-black/80">
      <div className="max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
            Projets Récents
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
            Découvrez une sélection de mes dernières réalisations et innovations.
          </p>
        </div>

        {/* Grille pour les projets */}
        <div className="max-w-7xl mx-auto">
          {/* Ligne pour les deux premiers projets (largeur réduite) */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10 lg:gap-12 xl:gap-16">
            {projects.slice(0, 2).map((project) => (
              <div 
                key={project.id} 
                // Ajout de max-w-md ou similaire pour réduire la largeur sur les grands écrans
                className="group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900/70 border border-gray-700/50
                           transition-all duration-300 ease-out hover:border-purple-500/60 
                           hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/25 mx-auto w-full sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md"
              >
                {/* Conteneur pour l'image */}
                <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 overflow-hidden"> {/* Hauteur d'image ajustée */} 
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Ajustement des sizes
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                {/* Conteneur pour le texte */} 
                <div className="flex flex-col flex-grow p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-1 mb-3 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3 sm:line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 bg-white/10 text-purple-300 border border-white/20 rounded-full text-[10px] sm:text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-auto text-xs sm:text-sm font-semibold text-white
                               hover:text-purple-300 group-hover:text-purple-300 transition-colors duration-300"
                  >
                    Voir le projet
                    <FiArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Ligne pour le dernier projet (largeur augmentée) */}
          {projects.length > 2 && (
            <div className="grid grid-cols-1 gap-8 sm:gap-10">
              {projects.slice(2, 3).map((project) => (
                <div 
                  key={project.id} 
                  // Ajustement de la largeur pour qu'elle soit plus grande, essayant de correspondre à la somme des deux autres
                  // Sur les grands écrans, on utilise w-full à l'intérieur d'un conteneur qui a une largeur max
                  // Le conteneur parent `max-w-7xl` et les `gap` de la grille supérieure influencent la largeur disponible.
                  // On peut utiliser `lg:max-w-4xl xl:max-w-5xl` pour le faire s'étendre davantage.
                  className="group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900/70 border border-gray-700/50
                             transition-all duration-300 ease-out hover:border-purple-500/60 
                             hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/25 mx-auto w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
                >
                  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden"> {/* Hauteur d'image augmentée */} 
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw" // Ajuster sizes
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mt-1 mb-4 sm:mb-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed flex-grow line-clamp-4 sm:line-clamp-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-4 sm:mb-5 md:mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1.5 bg-white/10 text-purple-300 border border-white/20 rounded-full text-xs sm:text-sm md:text-base font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-auto text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white
                                 hover:text-purple-300 group-hover:text-purple-300 transition-colors duration-300"
                    >
                      Voir le projet
                      <FiArrowUpRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-20 sm:mt-24">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-semibold text-base
                     bg-gradient-to-r from-purple-600 to-pink-600
                     hover:from-purple-500 hover:to-pink-500
                     transition-all duration-300 ease-in-out
                     transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Voir tous mes projets
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
