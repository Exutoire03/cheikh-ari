'use client';

import type { ReactNode } from 'react';
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

  const addImage = () => {
    const url = window.prompt("URL de l'image", 'https://');
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-950">
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
        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" aria-hidden />
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
        <ToolbarButton title="Image (URL)" onClick={addImage}>
          <FiImage className="h-4 w-4" />
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
