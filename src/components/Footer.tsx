'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const navigationLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Exutoire03', icon: <FiGithub size={20} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/cheikh-ari', icon: <FiLinkedin size={20} /> },
  ];

  return (
    // Le conteneur principal du footer avec un fond noir et une bordure supérieure subtile
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Section Gauche: Logo, description et contact principal */}
          <div className="md:col-span-5 space-y-6">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
            >
              Cheikh Ari
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Développeur Frontend passionné par la création d&apos;expériences web performantes et esthétiques.
            </p>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Discutons de votre projet</h3>
              <a 
                href="mailto:cheikhdev.web@gmail.com" 
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
              >
                <FiMail />
                cheikhdev.web@gmail.com
              </a>
            </div>
          </div>

          {/* Section Droite: Navigation et Réseaux */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigationLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Réseaux</h3>
              <ul className="space-y-3">
                {socialLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors duration-300"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Ligne de Copyright en bas */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Cheikh Ari. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-sm mt-4 sm:mt-0">
            Conçu avec ❤️ et du code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;