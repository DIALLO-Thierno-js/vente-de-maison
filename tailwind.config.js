/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',  // Assure-toi d'inclure ce fichier pour les classes Tailwind dans HTML
    './src/**/*.{js,jsx,ts,tsx}',  // Inclut les fichiers JavaScript/JSX/TSX de ton dossier src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
