import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const featuredProjects = [
  {
    id: 1,
    title: 'Générateur de bio avec IA',
    description: 'Une application web de génération de bio inspirantes en temps réel grâce à une IA.',
    image: '/projects/a-bio.PNG',
    tags: ['Next.js', 'Gemini', 'Tailwind CSS'],
    link: 'https://quotes-eight-red.vercel.app/',
  },
  {
    id: 2,
    title: 'Site vitrine du restaurant Corazon',
    description: 'Site vitrine moderne et responsive pour le restaurant Corazon, mettant en avant son ambiance unique.',
    image: '/projects/corazon.PNG',
    tags: ['Next.js', 'Tailwind CSS'],
    link: 'https://corazon-flax.vercel.app/',
  },
  {
    id: 3,
    title: 'Plateforme étudiants-entreprises',
    description: 'Plateforme innovante de mise en relation entre étudiants et entreprises pour des stages et des projets.',
    image: '/projects/a-eig.PNG',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    link: 'https://eig-soutenance.vercel.app/', 
  },
];

const skills = [
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
];


export default function HomePage() {
  return (
    // MODIFICATION PRINCIPALE :
    // 1. Le div décoratif en position absolue a été supprimé.
    // 2. Ce conteneur principal reçoit maintenant directement le fond noir.
    <div className="min-h-screen bg-black text-slate-300 font-sans">
        
      {/* --- SECTION 1: HÉROS --- */}
      {/* Les sections n'ont pas de couleur de fond, elles sont transparentes et montrent le bg-black du parent. */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tighter mb-6">
          Je transforme vos idées en
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500">
            applications web modernes.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
          Développeur Front-end spécialisé en React, Next.js et Tailwindcss, je conçois des expériences utilisateur fluides et des architectures solides pour donner vie à vos projets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#featured-projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full
                     text-white font-semibold transition-transform duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                     text-slate-100 font-semibold ring-2 ring-gray-700
                     hover:bg-gray-800 transition-all duration-300"
          >
            Me contacter
          </Link>
        </div>
      </section>

      {/* --- SECTION 2: PROJETS EN VITRINE --- */}
      <section id="featured-projects" className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tighter">
              Une sélection de mes réalisations
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Chaque projet est une nouvelle aventure, alliant design et technologie.
            </p>
          </div>
          
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                <div className={`relative w-full h-80 rounded-2xl overflow-hidden border border-gray-800 shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-900 text-sky-300 border border-gray-700 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors duration-300">
                    Voir le projet <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
        <Link
            href="/projects"
            className="inline-flex  mt-12 gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full
                     text-white font-semibold transition-transform duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Voir plus de projets
          </Link>
        </div>
      </section>

      {/* --- SECTION 3: COMPÉTENCES TECHNIQUES --- */}
      <section className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tighter">
              Mes Compétences Clés
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Les technologies que j&apos;utilise pour donner vie à vos projets.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="group p-6 rounded-2xl bg-gray-950 border border-gray-800 text-center
                                             hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-sky-400 transition-colors duration-300 mb-3 group-hover:text-sky-300">
                  {skill.icon}
                </div>
                <p className="text-md font-semibold text-slate-200 tracking-wider">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: APPEL À L'ACTION FINAL --- */}
      <section className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tighter">
                Prêt à concrétiser votre projet ?
            </h2>
            <p className="mt-4 mb-8 text-lg text-slate-400">
                Je suis toujours ouvert à de nouvelles opportunités. N&apos;hésitez pas à me contacter pour que nous puissions discuter de votre idée.
            </p>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full
                         text-white font-semibold transition-transform duration-300
                         hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
                Entrons en contact
            </Link>
        </div>
      </section>
        
    </div>
  );
}