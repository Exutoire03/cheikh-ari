import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

/** Extensions partagées entre l’éditeur et le rendu HTML (generateHTML). StarterKit inclut Link et Underline. */
export const blogExtensions = [
  StarterKit.configure({
    heading: { levels: [1, 2, 3, 4] },
    link: {
      openOnClick: true,
      HTMLAttributes: {
        class: 'text-sky-600 dark:text-sky-400 underline underline-offset-2',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
    },
  }),
  Image.configure({
    HTMLAttributes: {
      class: 'rounded-xl max-w-full mx-auto my-6 border border-gray-200 dark:border-gray-800',
    },
  }),
];
