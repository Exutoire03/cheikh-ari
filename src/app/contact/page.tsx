// app/contact/page.tsx

import { Metadata } from 'next';
import ContactForm from './ContactForm'; // On importe notre nouveau composant client

// --- META-DONNÉES POUR LE SEO ET LE PARTAGE ---
// C'est maintenant autorisé car ce fichier n'a PAS 'use client'.
export const metadata: Metadata = {
  title: 'Contact - Cheikh Ari',
  description: "Contactez-moi pour discuter de vos projets web, d'opportunités de collaboration ou pour toute autre question. Je suis à votre écoute.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans pt-28 pb-24 overflow-x-hidden">
      {/* Fond décoratif unifié */}
      <div 
        className="absolute top-0 left-0 -z-10 h-full w-full bg-black"
        style={{backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(14, 165, 233, 0.15), rgba(255, 255, 255, 0))'}}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* En-tête de la page (partie statique) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 tracking-tighter">
            Entrons en contact
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Une idée ? Un projet ? Une question ? Je suis à votre écoute. Remplissez le formulaire ou utilisez mes coordonnées pour me joindre.
          </p>
        </div>

        {/* On affiche ici le composant client qui contient toute la logique interactive */}
        <ContactForm />

      </div>
    </div>
  );
}