'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // La logique pour cacher/montrer la barre au scroll est conservée.
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // On cache la barre en défilant vers le bas, on la montre en défilant vers le haut
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Fermer le menu si un lien est cliqué
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // --- MODIFICATION PRINCIPALE ---
    // Le style de fond est maintenant permanent et plus simple.
    // L'état `isScrolled` a été retiré de la logique de style.
    <nav 
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out
        bg-gray-950/80 backdrop-blur-lg border-b border-gray-800
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            {/* Le logo est déjà parfait pour un fond sombre */}
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
              onClick={closeMenu}
            >
              Cheikh Ari
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  // Les couleurs des liens sont déjà parfaites pour un fond sombre
                  className="text-slate-300 hover:text-sky-400 px-3 py-2 text-sm lg:text-base font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-sky-400 focus:outline-none"
              aria-expanded={isMenuOpen}
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
        className={`md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-lg shadow-lg
                   transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;