import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Éditeur — Blog',
  robots: { index: false, follow: false },
};

export default function BlogEditorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
