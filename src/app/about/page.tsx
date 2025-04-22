import Image from 'next/image';

export default function AboutPage() {
  const experiences = [
    {
      period: '2021 - Présent',
      title: 'Développeur Full-Stack Senior',
      company: 'Entreprise Tech',
      description: 'Développement d\'applications web complexes, direction technique de projets, et mise en place de bonnes pratiques de développement.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      period: '2019 - 2021',
      title: 'Développeur Frontend',
      company: 'Startup Innovante',
      description: 'Création d\'interfaces utilisateur modernes et réactives, optimisation des performances.',
      technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      period: '2018 - 2019',
      title: 'Développeur Web Junior',
      company: 'Agence Web',
      description: 'Développement de sites web et intégration de maquettes pour divers clients.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP']
    }
  ];

  const softSkills = [
    {
      skill: 'Communication',
      icon: '💬',
      description: 'Excellentes capacités de communication et de vulgarisation technique'
    },
    {
      skill: 'Travail d\'équipe',
      icon: '🧑‍💻',
      description: 'Collaboration efficace et partage des connaissances'
    },
    {
      skill: 'Adaptabilité',
      icon: '🪜',
      description: 'Capacité à s\'adapter rapidement aux nouvelles technologies'
    },
    {
      skill: 'Résolution de problèmes',
      icon: '💡',
      description: 'Approche analytique et créative des défis techniques'
    },
    {
      skill: 'Leadership',
      icon: '🌟',
      description: 'Expérience en mentorat et gestion d\'équipe'
    }
  ];

  const hobbies = [
    {
      name: 'Photographie',
      icon: '📸',
      description: 'Passion pour la photographie de rue et les paysages'
    },
    {
      name: 'Musique',
      icon: '🎸',
      description: 'Pratique de la guitare et composition'
    },
    {
      name: 'Voyage',
      icon: '✈️',
      description: 'Découverte de nouvelles cultures et endroits'
    },
    {
      name: 'Sport',
      icon: '🏃',
      description: 'Course à pied et escalade'
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL']
    },
    {
      category: 'Outils',
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-[2000px] mx-auto px-8 lg:px-16">
        {/* En-tête */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            À Propos de Moi
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Développeur passionné par la création d&apos;expériences web innovantes
          </p>
        </div>

        {/* Section Présentation */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent z-10"></div>
            <Image
              src="https://placehold.co/800x1000/222222/cccccc?text=Votre+Photo"
              alt="Photo de profil"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
              Bonjour, je suis [Votre Nom]
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Développeur web full-stack avec plus de [X] années d&apos;expérience dans la création d&apos;applications web modernes et performantes. Passionné par les nouvelles technologies et l&apos;innovation, je m&apos;efforce de créer des solutions élégantes qui répondent aux besoins des utilisateurs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon approche combine créativité et rigueur technique pour développer des applications web qui se démarquent tant par leur design que par leur performance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full
                         transition-all duration-300 text-white font-semibold hover:transform
                         hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Me Contacter
              </a>
            </div>
          </div>
        </div>

        {/* Section Compétences */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mes Compétences Techniques
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900/40
                         backdrop-blur-sm transition-all duration-500
                         shadow-xl hover:shadow-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-purple-600/10 text-purple-400 rounded-full text-sm font-medium
                               hover:bg-purple-600/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Expérience */}
        <div className="max-w-7xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mon Expérience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900/40
                         backdrop-blur-sm transition-all duration-500
                         shadow-xl hover:shadow-purple-500/20"
              >
                <div className="grid md:grid-cols-[200px,1fr] gap-8">
                  <div>
                    <span className="text-purple-400 font-semibold">{exp.period}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-purple-400 mb-4">{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/10 text-purple-400 rounded-full text-sm
                                   hover:bg-purple-600/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Soft Skills */}
        <div className="max-w-7xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Soft Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((soft, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900/40
                         backdrop-blur-sm transition-all duration-500
                         shadow-xl hover:shadow-purple-500/20 group"
              >
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                  {soft.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  {soft.skill}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {soft.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Hobbies */}
        <div className="max-w-7xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mes Passions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-gray-900/80 to-gray-900/40
                         backdrop-blur-sm transition-all duration-500
                         shadow-xl hover:shadow-purple-500/20 group text-center"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
