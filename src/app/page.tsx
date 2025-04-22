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
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Développeur Web Créatif
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transformant des idées en expériences web exceptionnelles
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300 text-white font-semibold"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-600 hover:border-purple-500 rounded-full transition-colors duration-300 text-white font-semibold"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mes Compétences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js',
              'Tailwind CSS', 'MongoDB', 'GraphQL', 'AWS'
            ].map((skill) => (
              <div key={skill} className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-colors text-center">
                <p className="text-lg font-semibold text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Projets Récents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300 text-white font-semibold"
            >
              Voir plus de projets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
