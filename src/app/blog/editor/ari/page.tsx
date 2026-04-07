'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSend, FiGlobe, FiUpload, FiFolder } from 'react-icons/fi';
import BlogEditor from '@/components/blog/BlogEditor';
import { slugify } from '@/lib/slugify';
import type { JSONContent } from '@tiptap/core';

const emptyDoc: JSONContent = {
  type: 'doc',
  content: [{ type: 'paragraph' }],
};

export default function BlogEditorAriPage() {
  const [title, setTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  /** url = lien externe (storage, CDN) ; upload = fichier envoyé vers public/blog/covers ; publicPath = chemin /... dans public */
  const [coverMode, setCoverMode] = useState<'url' | 'upload' | 'publicPath'>('url');
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadCoverError, setUploadCoverError] = useState('');
  const [slug, setSlug] = useState('');
  /** Si true, le slug n’est plus recalculé depuis le titre (édition manuelle). */
  const [slugManual, setSlugManual] = useState(false);
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
      setCoverMode('url');
      setUploadCoverError('');
      setSlug('');
      setSlugManual(false);
      setContent(emptyDoc);
      setEditorKey((k) => k + 1);
    } catch {
      setStatus('err');
      setMessage('Erreur réseau.');
    }
  }

  async function handleCoverFile(file: File | null) {
    if (!file) return;
    setUploadCoverError('');
    setUploadingCover(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/upload/cover', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) {
        setUploadCoverError(data.error || 'Upload impossible.');
        return;
      }
      setCoverImage(data.url as string);
      setCoverMode('upload');
    } catch {
      setUploadCoverError('Erreur réseau.');
    } finally {
      setUploadingCover(false);
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
                onChange={(e) => {
                  const v = e.target.value;
                  setTitle(v);
                  if (!slugManual) {
                    setSlug(slugify(v));
                  }
                }}
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
            <div className="sm:col-span-2 space-y-4">
              <span className="block text-sm font-medium text-slate-600 dark:text-slate-400">
                Image de couverture
              </span>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Source de l’image">
                <button
                  type="button"
                  role="tab"
                  aria-selected={coverMode === 'url'}
                  onClick={() => setCoverMode('url')}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors
                    ${
                      coverMode === 'url'
                        ? 'bg-sky-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                >
                  <FiGlobe className="h-4 w-4" aria-hidden />
                  URL (storage, CDN)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={coverMode === 'upload'}
                  onClick={() => setCoverMode('upload')}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors
                    ${
                      coverMode === 'upload'
                        ? 'bg-sky-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                >
                  <FiUpload className="h-4 w-4" aria-hidden />
                  Importer → public/blog/covers
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={coverMode === 'publicPath'}
                  onClick={() => setCoverMode('publicPath')}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors
                    ${
                      coverMode === 'publicPath'
                        ? 'bg-sky-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                >
                  <FiFolder className="h-4 w-4" aria-hidden />
                  Fichier dans public/
                </button>
              </div>

              {coverMode === 'url' && (
                <div>
                  <label htmlFor="cover-url" className="sr-only">
                    URL de l’image
                  </label>
                  <input
                    id="cover-url"
                    type="text"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none"
                    placeholder="https://mon-storage.com/image.jpg ou laissez vide pour l’image par défaut"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Lien public vers votre image (Supabase Storage, S3, Cloudinary, etc.).
                  </p>
                </div>
              )}

              {coverMode === 'upload' && (
                <div className="space-y-2">
                  <label className="block">
                    <span className="mb-2 block text-xs text-slate-500">
                      Le fichier est enregistré dans{' '}
                      <code className="rounded bg-gray-100 dark:bg-gray-900 px-1">public/blog/covers/</code>
                    </span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      disabled={uploadingCover}
                      onChange={(e) => handleCoverFile(e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-slate-600 dark:text-slate-400 file:mr-4 file:rounded-lg file:border-0 file:bg-sky-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-sky-400"
                    />
                  </label>
                  {uploadingCover && (
                    <p className="text-sm text-sky-600 dark:text-sky-400">Envoi en cours…</p>
                  )}
                  {uploadCoverError && (
                    <p className="text-sm text-red-600 dark:text-red-400">{uploadCoverError}</p>
                  )}
                  {coverImage.startsWith('/blog/covers/') && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                      Image enregistrée : <code className="break-all">{coverImage}</code>
                    </p>
                  )}
                </div>
              )}

              {coverMode === 'publicPath' && (
                <div>
                  <label htmlFor="cover-public" className="sr-only">
                    Chemin dans public
                  </label>
                  <input
                    id="cover-public"
                    type="text"
                    value={coverImage}
                    onChange={(e) => {
                      let v = e.target.value;
                      if (v.length > 0 && !v.startsWith('/') && !v.startsWith('http')) {
                        v = `/${v}`;
                      }
                      setCoverImage(v);
                    }}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 font-mono text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none"
                    placeholder="/projects/mon-image.png"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Chemin commençant par <code className="rounded bg-gray-100 dark:bg-gray-900 px-1">/</code>
                    , relatif au dossier <code className="rounded bg-gray-100 dark:bg-gray-900 px-1">public</code>{' '}
                    (ex. <code className="rounded bg-gray-100 dark:bg-gray-900 px-1">/projects/tsi.PNG</code>).
                  </p>
                </div>
              )}

              {coverImage.trim() && (
                <div className="relative mt-2 aspect-video max-h-48 w-full max-w-md overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coverImage} alt="Aperçu couverture" className="h-full w-full object-contain" />
                </div>
              )}
            </div>
            <div className="sm:col-span-2 sm:max-w-md">
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
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label htmlFor="slug" className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Slug (URL)
                </label>
                {slugManual && (
                  <button
                    type="button"
                    onClick={() => {
                      setSlugManual(false);
                      setSlug(slugify(title));
                    }}
                    className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    Réaligner sur le titre
                  </button>
                )}
              </div>
              <input
                id="slug"
                value={slug}
                onChange={(e) => {
                  setSlugManual(true);
                  setSlug(e.target.value);
                }}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none font-mono text-sm"
                placeholder="genere-automatiquement-depuis-le-titre"
              />
              <p className="mt-1 text-xs text-slate-500">
                Rempli automatiquement à partir du titre. Modifiez le champ pour un slug personnalisé.
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
