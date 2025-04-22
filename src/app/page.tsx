import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Modern',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes. Développée avec Next.js et Stripe.',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Application de Gestion',
      description: 'Système de gestion d’entreprise avec tableaux de bord, rapports et analyses en temps réel.',
      image: '/projects/dashboard.jpg',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Réseau Social',
      description: 'Plateforme sociale avec messagerie en temps réel, partage de contenu et gestion de profil.',
      image: '/projects/social.jpg',
      tags: ['React', 'Socket.io', 'Express']
    }
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
                href="#contact"
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mes Compétences
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Les technologies que j'utilise pour donner vie à vos projets
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js',
              'Tailwind CSS', 'MongoDB', 'GraphQL', 'AWS'
            ].map((skill) => (
              <div 
                key={skill} 
                className="p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900/40
                         backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500
                         shadow-xl hover:shadow-purple-500/20 group"
              >
                <p className="text-xl font-semibold text-gray-200 group-hover:text-purple-400 transition-colors text-center">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-black to-black/80">
        <div className="max-w-[2000px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Projets Récents
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Découvrez mes dernières réalisations et innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-gradient-to-b from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden
                         hover:transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-purple-500/20"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-1.5 bg-purple-600/10 text-purple-400 rounded-full text-sm font-medium
                                 hover:bg-purple-600/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              href="/projects"
              className="inline-flex items-center px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-full
                       transition-all duration-300 text-white font-semibold text-lg hover:transform
                       hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              Voir plus de projets
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
