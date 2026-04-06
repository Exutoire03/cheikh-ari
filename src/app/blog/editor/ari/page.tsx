'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import BlogEditor from '@/components/blog/BlogEditor';
import type { JSONContent } from '@tiptap/core';

const emptyDoc: JSONContent = {
  type: 'doc',
  content: [{ type: 'paragraph' }],
};

export default function BlogEditorAriPage() {
  const [title, setTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [slug, setSlug] = useState('');
  const [publishedAt, setPublishedAt] = useState(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 16);
  });
  const [content, setContent] = useState<JSONContent>(emptyDoc);
  const [editorKey, setEditorKey] = useState(0);
  const [status, setStatus] = useState<'idle' | 'saving' | 'ok' | 'err'>('idle');
  const [message, setMessage] = useState('');

  async function handlePublish(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    setMessage('');
    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          metaDescription,
          coverImage: coverImage.trim() || undefined,
          slug: slug.trim() || undefined,
          publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
          content,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('err');
        setMessage(data.error || 'Erreur lors de la publication.');
        return;
      }
      setStatus('ok');
      setMessage('Article publié avec succès.');
      setTitle('');
      setMetaDescription('');
      setCoverImage('');
      setSlug('');
      setContent(emptyDoc);
      setEditorKey((k) => k + 1);
    } catch {
      setStatus('err');
      setMessage('Erreur réseau.');
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-300 font-sans pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium mb-8 hover:underline"
        >
          <FiArrowLeft />
          Retour au blog
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tighter mb-2">
            Éditeur d&apos;articles
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Rédigez avec TipTap, puis publiez. L&apos;article est enregistré dans le dépôt (
            <code className="text-sm bg-gray-100 dark:bg-gray-900 px-1 rounded">posts.json</code>
            ).
          </p>
        </header>

        <form onSubmit={handlePublish} className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Titre
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none"
                placeholder="Titre de l’article"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="meta"
                className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2"
              >
                Meta description
              </label>
              <textarea
                id="meta"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                required
                rows={3}
                maxLength={320}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none resize-y"
                placeholder="Résumé pour le SEO et les cartes du blog"
              />
            </div>
            <div>
              <label
                htmlFor="cover"
                className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2"
              >
                Image de couverture (URL)
              </label>
              <input
                id="cover"
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none"
                placeholder="https://… ou laissez vide pour l’image par défaut"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2"
              >
                Date de publication
              </label>
              <input
                id="date"
                type="datetime-local"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="slug" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Slug (optionnel)
              </label>
              <input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none font-mono text-sm"
                placeholder="genere-automatiquement-depuis-le-titre"
              />
              <p className="mt-1 text-xs text-slate-500">
                Si vide, le slug est dérivé du titre (lettres minuscules, tirets).
              </p>
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
              Contenu
            </span>
            <BlogEditor
              key={editorKey}
              content={content}
              onChange={(json) => setContent(json as JSONContent)}
            />
          </div>

          {message && (
            <p
              className={
                status === 'ok'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-red-600 dark:text-red-400'
              }
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'saving'}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white
                       bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-400 hover:to-purple-400
                       disabled:opacity-60 transition-all"
          >
            <FiSend className="h-5 w-5" />
            {status === 'saving' ? 'Publication…' : 'Publier l’article'}
          </button>
        </form>
      </div>
    </div>
  );
}
