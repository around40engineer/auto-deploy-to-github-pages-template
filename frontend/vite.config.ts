/// <reference types="vitest" />
import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    const  VITE_GITHUB_ACTIONS  = `${env.VITE_GITHUB_ACTIONS ?? false}`

    return {
        plugins: [react()],
        base: VITE_GITHUB_ACTIONS==='true' ? '/auto-deploy-to-github-pages-template/' : '/',
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/setup.ts']
        },
    }
})
