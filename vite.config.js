import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      postcss: {
        plugins: ["@tailwindcss/nesting", "tailwindcss", "tailwindcss-themer", "tailwindcss-custom-variants", "autoprefixer"],
      },
    }),
    react(),
  ],
});
