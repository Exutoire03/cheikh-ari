'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsScrolled] = useState(false);

  // Gestion du scroll pour l'opacité de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl md:text-2xl font-bold">
              Cheikh Ari
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm lg:text-base font-medium transition-colors">
                Accueil
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 text-sm lg:text-base font-medium transition-colors">
                Projets
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm lg:text-base font-medium transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm lg:text-base font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm shadow-lg">
          <Link
            href="/"
            className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </Link>
          <Link
            href="/about"
            className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
