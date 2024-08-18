/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: import.meta.env.GITHUB_ACTIONS ? '/auto-deploy-to-github-pages-template/' : './',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setup.ts']
    },
})
