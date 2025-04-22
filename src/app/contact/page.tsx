'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Animation de chargement à implémenter
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'votre.email@exemple.com',
      icon: '📧'
    },
    {
      title: 'Téléphone',
      value: '+33 6 XX XX XX XX',
      icon: '📱'
    },
    {
      title: 'Localisation',
      value: 'Paris, France',
      icon: '📍'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/votre-username',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/votre-profil',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/votre-compte',
      icon: '🐦'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(168,85,247,0.1),transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,rgba(236,72,153,0.1),transparent_80%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(255,255,255,0.03)_1.5px,transparent_1.5px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* En-tête */}
        {/* En-tête avec animation d'entrée */}
        <div className={`max-w-3xl mx-auto text-center space-y-6 mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 animate-gradient bg-[length:200%_auto]">
            Contactez-moi
          </h1>
          <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed max-w-2xl mx-auto">
            N&apos;hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration
          </p>
        </div>

        {/* Conteneur principal avec disposition en grille */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Formulaire de contact */}
          {/* Formulaire - occupe 7 colonnes sur grand écran */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm
                           border ${activeField === '$FIELD_NAME' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-800'}
                           text-white focus:outline-none
                           transition-all duration-300 transform
                           ${activeField === '$FIELD_NAME' ? 'scale-[1.02]' : 'scale-100'}`}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm
                           border ${activeField === '$FIELD_NAME' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-800'}
                           text-white focus:outline-none
                           transition-all duration-300 transform
                           ${activeField === '$FIELD_NAME' ? 'scale-[1.02]' : 'scale-100'}`}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm
                           border ${activeField === '$FIELD_NAME' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-800'}
                           text-white focus:outline-none
                           transition-all duration-300 transform
                           ${activeField === '$FIELD_NAME' ? 'scale-[1.02]' : 'scale-100'}`}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 
                           text-white focus:outline-none focus:border-purple-500 
                           transition-colors duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-purple-600 rounded-xl
                         transition-all duration-300 text-white font-semibold text-lg
                         overflow-hidden hover:shadow-xl hover:shadow-purple-500/20
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0
                               group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative inline-flex items-center">
                  Envoyer le message
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          {/* Informations de contact - occupe 5 colonnes sur grand écran */}
          <div className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-24">
            <div className="space-y-12">
              {/* Contact direct */}
              <div>
                <h2 className="text-2xl font-bold text-purple-400 mb-8">
                  Informations de contact
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group flex items-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm
                               hover:bg-gray-800/50 transition-all duration-300 transform
                               hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
                    >
                      <span className="text-2xl mr-4">{info.icon}</span>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                        <p className="text-lg text-white">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h2 className="text-2xl font-bold text-purple-400 mb-8">
                  Suivez-moi
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center px-6 py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm
                               overflow-hidden transition-all duration-300 group transform
                               hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
                      style={{
                        background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))'
                      }}
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
