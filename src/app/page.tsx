// Assurez-vous d'avoir react-icons
// npm install react-icons
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiPenTool } from 'react-icons/fi';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';


// --- TROISIÈME PROJET AJOUTÉ CI-DESSOUS ---
const featuredProjects = [
  {
    id: 1,
    title: 'Générateur de bio avec ia',
    description: 'Une application web de génération de bio inspirantes en temps réel grace à une ia',
    image: '/projects/a-bio.PNG', // Remplacez par vos images
    tags: ['Next.js', 'Gemini', 'Tailwind CSS'],
    link: 'https://quotes-eight-red.vercel.app/',
  },
  {
    id: 2,
    title: 'Site vitrine du restaurant Corazon',
    description: 'Site vitrine du restaurant Corazon',
    image: '/projects/corazon.PNG', // Remplacez par vos images
    tags: ['Nextjs', 'Tailwind CSS'],
    link: 'https://corazon-flax.vercel.app/',
  },
  {
    id: 3,
    title: 'Plateforme de mis en relation entre étudiants et entreprises',
    description: 'Plateforme innovante de mise en relation entre étudiants et entreprise',
    image: '/projects/a-eig.PNG', // Remplacez par vos images
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    link: '/about', // Lien vers la page "À Propos" par exemple
  },
];

// --- LISTE DES TECHNOLOGIES POUR LA NOUVELLE SECTION ---
const skills = [
  { name: 'React', icon: <FaReact size={48} className="mx-auto" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={48} className="mx-auto" /> },
  { name: 'TypeScript', icon: <SiTypescript size={48} className="mx-auto" /> },
  { name: 'Node.js', icon: <FaNodeJs size={48} className="mx-auto" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="mx-auto" /> },
  // Ajoutez d'autres compétences ici
];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans">
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-slate-950"
        style={{backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(14, 165, 233, 0.15), rgba(255, 255, 255, 0))'}}
      ></div>

      {/* --- SECTION 1: HÉROS --- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tighter mb-6">
          Je transforme vos idées en
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500">
            applications web modernes.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
          Développeur Full-Stack spécialisé en React, Next.js et Node.js, je conçois des expériences utilisateur fluides et des architectures robustes pour donner vie à vos projets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full
                     text-white font-semibold transition-transform duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                     text-slate-100 font-semibold ring-2 ring-slate-700
                     hover:bg-slate-800 transition-all duration-300"
          >
            Me contacter
          </Link>
        </div>
      </section>

      {/* --- SECTION 2: PROJETS EN VITRINE --- */}
      <section id="projects" className="py-24 sm:py-32 px-6 lg:px-8">
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
              <div
                key={project.id}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >
                <div className={`relative w-full h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl 
                                ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
                </div>

                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 text-sky-300 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sky-400 font-semibold
                               hover:text-sky-300 transition-colors duration-300"
                  >
                    Découvrir le cas d&apos;étude <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOUVELLE SECTION: MA STACK TECHNOLOGIQUE --- */}
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

      {/* --- SECTION 4: APERÇU DES SERVICES (anciennement section 3) --- */}
      <section className="py-24 sm:py-32 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tighter">
              Une approche complète
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              De l&apos;interface utilisateur à la base de données, je couvre tout le spectre du développement web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-colors duration-300">
              <FiCode className="w-8 h-8 text-sky-400 mb-4"/>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Développement Frontend</h3>
              <p className="text-slate-400">Création d&apos;interfaces réactives et interactives avec React & Next.js pour une expérience utilisateur exceptionnelle.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors duration-300">
              <FiPenTool className="w-8 h-8 text-emerald-400 mb-4"/>
              <h3 className="text-xl font-bold text-slate-100 mb-2">UI/UX & Intégration</h3>
              <p className="text-slate-400">Une attention particulière portée au design et à l&apos;ergonomie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: APPEL À L'ACTION FINAL --- */}
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