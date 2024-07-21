import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

const dir = './src/pages'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    rollupOptions: {
      input: {
        main: resolve('./', 'index.html'),
        home: resolve(dir, 'Home.tsx'),
        about: resolve(dir , 'About.tsx'),
        contact: resolve(dir , 'Contact.tsx'),
        projects: resolve(dir , 'Projects.tsx'),
        skills: resolve(dir , 'Skills.tsx'),
      },
    },
  },
})
