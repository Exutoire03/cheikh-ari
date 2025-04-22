import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-commerce Modern',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes. Développée avec Next.js et Stripe.',
    image: 'https://placehold.co/600x400/222222/cccccc?text=E-commerce+Modern',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Application de Gestion',
    description: 'Système de gestion d\'entreprise avec tableaux de bord, rapports et analyses en temps réel.',
    image: 'https://placehold.co/600x400/222222/cccccc?text=Application+de+Gestion',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Réseau Social',
    description: 'Plateforme sociale avec messagerie en temps réel, partage de contenu et gestion de profil.',
    image: 'https://placehold.co/600x400/222222/cccccc?text=Réseau+Social',
    tags: ['React', 'Socket.io', 'Express'],
    link: '#'
  },
  {
    id: 4,
    title: 'Application Mobile',
    description: 'Application mobile cross-platform pour la gestion de tâches et la collaboration en équipe.',
    image: 'https://placehold.co/600x400/222222/cccccc?text=Application+Mobile',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: '#'
  },
  {
    id: 5,
    title: 'Blog Personnel',
    description: 'Blog moderne avec système de gestion de contenu, commentaires et newsletter.',
    image: 'https://placehold.co/600x400/222222/cccccc?text=Blog+Personnel',
    tags: ['Next.js', 'MDX', 'Prisma'],
    link: '#'
  },
  {
    id: 6,
    title: 'Portfolio Créatif',
    description: 'Portfolio interactif avec animations et effets visuels modernes.',
    image: 'https://placehold.co/600x400/222222/cccccc?text=Portfolio+Créatif',
    tags: ['React', 'Three.js', 'GSAP'],
    link: '#'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-[2000px] mx-auto px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Tous mes projets
          </h1>
          <p className="text-xl text-gray-300">
            Découvrez une sélection de mes réalisations les plus récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full
                           transition-all duration-300 text-white font-semibold text-sm group-hover:shadow-lg
                           group-hover:shadow-purple-500/30"
                >
                  Voir le projet
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
