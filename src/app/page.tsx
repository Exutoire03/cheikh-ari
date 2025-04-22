import Image from "next/image";

export default function Home() {
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
    </div>
  );
}
