'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import {
  FiBold,
  FiItalic,
  FiList,
  FiMinus,
  FiImage,
  FiLink,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiUpload,
  FiFolder,
  FiCode,
} from 'react-icons/fi';
import { blogExtensions } from '@/lib/blog-extensions';

const editorExtensions = [
  ...blogExtensions,
  Placeholder.configure({
    placeholder: 'Écrivez votre article ici… Titres, listes, liens et images.',
  }),
];

function ToolbarButton({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg p-2 text-sm transition-colors disabled:opacity-40
        ${
          active
            ? 'bg-sky-500/20 text-sky-600 dark:text-sky-400'
            : 'text-slate-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-gray-800'
        }`}
    >
      {children}
    </button>
  );
}

export default function BlogEditor({
  content,
  onChange,
}: {
  content: unknown;
  onChange: (json: unknown) => void;
}) {
  const imageFileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: editorExtensions,
    content: content ?? { type: 'doc', content: [{ type: 'paragraph' }] },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'tiptap-editor max-w-none focus:outline-none text-slate-800 dark:text-slate-200',
      },
    },
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getJSON());
    },
  });

  if (!editor) {
    return (
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 min-h-[22rem] animate-pulse" />
    );
  }

  const setLink = () => {
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('URL du lien', prev ?? 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImageFromUrl = () => {
    const url = window.prompt("URL de l'image", 'https://');
    if (!url?.trim()) return;
    editor.chain().focus().setImage({ src: url.trim() }).run();
  };

  const addImageFromPublicPath = () => {
    const path = window.prompt(
      'Chemin public (fichier déjà dans le dépôt, ex. /blog/media/… ou /projects/…)',
      '/blog/media/'
    );
    if (!path?.trim()) return;
    editor.chain().focus().setImage({ src: path.trim() }).run();
  };

  const onImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    try {
      const res = await fetch('/api/upload/blog-media', { method: 'POST', body: form });
      const data = (await res.json()) as { ok?: boolean; url?: string; error?: string };
      if (!data.ok || !data.url) {
        window.alert(data.error ?? "Échec de l'upload.");
        return;
      }
      editor.chain().focus().setImage({ src: data.url }).run();
    } catch {
      window.alert("Échec de l'upload.");
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-950">
      <input
        ref={imageFileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="sr-only"
        aria-hidden
        tabIndex={-1}
        onChange={onImageFileChange}
      />
      <div
        className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80"
        role="toolbar"
        aria-label="Mise en forme"
      >
        <ToolbarButton
          title="Gras"
          active={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FiBold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Italique"
          active={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FiItalic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Barré"
          active={editor.isActive('strike')}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <span className="text-xs font-semibold line-through">S</span>
        </ToolbarButton>
        <ToolbarButton
          title="Souligné"
          active={editor.isActive('underline')}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="text-xs font-semibold underline underline-offset-2">U</span>
        </ToolbarButton>
        <ToolbarButton
          title="Code en ligne"
          active={editor.isActive('code')}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <FiCode className="h-4 w-4" />
        </ToolbarButton>
        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" aria-hidden />
        <ToolbarButton
          title="Titre 1"
          active={editor.isActive('heading', { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          H1
        </ToolbarButton>
        <ToolbarButton
          title="Titre 2"
          active={editor.isActive('heading', { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          title="Titre 3"
          active={editor.isActive('heading', { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </ToolbarButton>
        <ToolbarButton
          title="Titre 4"
          active={editor.isActive('heading', { level: 4 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        >
          H4
        </ToolbarButton>
        <ToolbarButton
          title="Bloc de code"
          active={editor.isActive('codeBlock')}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <span className="text-xs font-mono font-bold">{'</>'}</span>
        </ToolbarButton>
        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" aria-hidden />
        <ToolbarButton
          title="Liste à puces"
          active={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <FiList className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Liste numérotée"
          active={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <span className="text-xs font-mono font-bold">1.</span>
        </ToolbarButton>
        <ToolbarButton
          title="Citation"
          active={editor.isActive('blockquote')}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          “ ”
        </ToolbarButton>
        <ToolbarButton
          title="Ligne horizontale"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <FiMinus className="h-4 w-4" />
        </ToolbarButton>
        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" aria-hidden />
        <ToolbarButton title="Lien" onClick={setLink}>
          <FiLink className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton title="Image (URL)" onClick={addImageFromUrl}>
          <FiImage className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton title="Importer une image (dépôt → public/blog/media)" onClick={() => imageFileRef.current?.click()}>
          <FiUpload className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton title="Image : chemin dans public/" onClick={addImageFromPublicPath}>
          <FiFolder className="h-4 w-4" />
        </ToolbarButton>
        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" aria-hidden />
        <ToolbarButton title="Annuler" onClick={() => editor.chain().focus().undo().run()}>
          <FiCornerUpLeft className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton title="Rétablir" onClick={() => editor.chain().focus().redo().run()}>
          <FiCornerUpRight className="h-4 w-4" />
        </ToolbarButton>
      </div>
      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
