'use client'; 

import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    alert('Message envoyé (simulation) !');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    { title: 'Email', value: 'cheikhdev.web@gmail.com', icon: <FiMail /> },
    { title: 'Téléphone', value: '+229 95 64 85 42', icon: <FiPhone /> },
    { title: 'Localisation', value: 'Cotonou, Bénin', icon: <FiMapPin /> }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Exutoire03', icon: <FiGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/cheikh-ari', icon: <FiLinkedin /> },
  ];

  return (
   
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      
      
      <div className={`lg:col-span-7 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <div className="p-8 bg-gray-950/50 border border-gray-800 rounded-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="relative group">
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 transition-colors group-focus-within:text-sky-400">
                Nom complet
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 placeholder-gray-500
                           focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-300"
                placeholder="Ex: Jean Dupont"
              />
            </div>

            <div className="relative group">
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 transition-colors group-focus-within:text-sky-400">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 placeholder-gray-500
                           focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-300"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div className="relative group">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2 transition-colors group-focus-within:text-sky-400">
                Sujet
              </label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 placeholder-gray-500
                           focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-300"
                placeholder="Opportunité de collaboration"
              />
            </div>

            <div className="relative group">
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 transition-colors group-focus-within:text-sky-400">
                Votre message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-slate-100 placeholder-gray-500
                           focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-300 resize-none"
                placeholder="Bonjour, je vous contacte concernant..."
              />
            </div>

            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold
                       bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-400 hover:to-purple-400
                       transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <FiSend className="w-5 h-5" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      
      <div className={`lg:col-span-5 lg:sticky lg:top-28 space-y-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Autres moyens de contact</h2>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-950/50 border border-gray-800 hover:border-sky-500/50 transition-colors duration-300">
                <span className="p-2 bg-gray-800 rounded-lg text-sky-400 mt-1">{info.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-200">{info.title}</h3>
                  <p className="text-slate-400">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Retrouvez-moi en ligne</h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800
                           text-slate-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}