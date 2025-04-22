import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Développeur Web',
  description: 'Portfolio professionnel de développeur web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <Navbar />
        <main className="pt-16 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
