// Installez react-icons si ce n'est pas déjà fait: npm install react-icons
import Image from 'next/image';
import { FiArrowUpRight, FiBriefcase, FiCode, FiCpu, FiMessageCircle, FiUsers, FiAward, FiStar, FiCamera, FiGlobe, FiBookOpen, FiEdit3, FiActivity, FiDribbble, FiGitMerge } from 'react-icons/fi';


const experiences = [
    {
      period: '2024 - Présent',
      title: 'Développeur Fullstack',
      company: 'Projets Personnels',
      description: 'Conception et développement d\'applications web, de l\'idéation au déploiement.',
      icon: <FiStar />
    },
    {
      period: '2024 - 2025',
      title: 'Développeur Fullstack',
      company: 'Tama',
      description: 'Création d\'interfaces utilisateur modernes et réactives, optimisation des performances back-end.',
      icon: <FiBriefcase />
    },
    {
      period: '2023 - 2024',
      title: 'Apprentissage en Développement Web',
      company: 'Ecole Internationale de Graphisme',
      description: 'Acquisition des fondamentaux du développement web moderne et des bonnes pratiques.',
      icon: <FiAward />
    }
  ];
  
const softSkills = [
    { skill: 'Communication', icon: <FiMessageCircle />, description: 'Excellentes capacités de communication et de vulgarisation technique' },
    { skill: 'Travail d\'équipe', icon: <FiUsers />, description: 'Collaboration efficace et partage des connaissances' },
    { skill: 'Adaptabilité', icon: <FiGitMerge />, description: 'Capacité à m\'adapter rapidement aux nouvelles technologies' },
    { skill: 'Résolution de problèmes', icon: <FiCpu />, description: 'Approche analytique et créative des défis techniques' },
  ];
  
const hobbies = [
    { name: 'Photographie', icon: <FiCamera />, description: 'Passion pour la photographie de rue et les paysages' },
    { name: 'Voyage', icon: <FiGlobe />, description: 'Découverte de nouvelles cultures et endroits' },
    { name: 'Sport', icon: <FiActivity />, description: 'Course à pied et escalade' },
    { name: 'Lecture', icon: <FiBookOpen />, description: 'Passionné par la lecture de livres' },
    { name: 'Ecriture', icon: <FiEdit3 />, description: 'Ecriture de romans et de poèmes' },
  ];
  
const skills = [
    { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: <FiCode /> },
    { category: 'Backend', technologies: ['Node.js','PostgreSQL'], icon: <FiCpu /> },
    { category: 'Outils', technologies: ['Git', 'Docker', 'Vercel'], icon: <FiDribbble /> },
  ];


export default function AboutPageRedesigned() {
  return (
    
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- SECTION 1: HÉROS / INTRODUCTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-32">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 tracking-tighter">
              Je conçois et développe des expériences web qui marquent les esprits.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Bonjour, je suis Cheikh Ari. Développeur passionné, je transforme des idées complexes en applications web intuitives, élégantes et performantes. Mon objectif est de créer des produits qui sont non seulement fonctionnels, mais aussi agréables à utiliser.
            </p>
            <a
              href="https://wa.me/message/4MR4JID7X4ZEG1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full
                       text-white font-semibold transition-all duration-300
                       hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Discutons de votre projet <FiArrowUpRight />
            </a>
          </div>
          <div className="relative w-full max-w-xs mx-auto lg:max-w-none h-80 lg:h-96">
             <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 to-purple-500/30 rounded-3xl transform -rotate-6"></div>
             <Image
              src="/projects/ari.jpg" 
              alt="Photo de Cheikh Ari"
              fill
              className="object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* --- SECTION 2: EXPÉRIENCE (TIMELINE) --- */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100 tracking-tighter">Mon Parcours Professionnel</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-800" aria-hidden="true"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border-2 border-sky-500 text-sky-500">
                    {exp.icon}
                  </div>
                  <div className="pl-4">
                    <p className="text-sm font-medium text-sky-400 mb-1">{exp.period}</p>
                    <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                    <p className="text-md text-slate-400 mb-3">{exp.company}</p>
                    <p className="text-slate-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: COMPÉTENCES & ATOUTS (BENTO GRID) --- */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100 tracking-tighter">Compétences & Atouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Compétences techniques */}
            {skills.map(skillGroup => (
              <div key={skillGroup.category} className="p-6 rounded-2xl bg-slate-900 border border-slate-800
                                                    hover:border-sky-500/50 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="p-2 bg-slate-800 rounded-lg text-sky-400">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold text-slate-100">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
            {/* Soft Skills */}
            {softSkills.map(soft => (
              <div key={soft.skill} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 
                                            hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl text-purple-400">{soft.icon}</span>
                  <h3 className="text-xl font-bold text-slate-100">{soft.skill}</h3>
                </div>
                <p className="text-slate-400 text-sm">{soft.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* --- SECTION 4: HOBBIES / AU-DELÀ DU CODE --- */}
        
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100 tracking-tighter">Au-delà du Code</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {hobbies.map(hobby => (
              <div key={hobby.name} className="p-6 rounded-2xl bg-slate-900 border border-slate-800
                                            flex flex-col items-center justify-center gap-3
                                            hover:-translate-y-1 transition-transform duration-300">
                <span className="text-4xl">{hobby.icon}</span>
                <p className="font-semibold text-slate-200">{hobby.name}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}