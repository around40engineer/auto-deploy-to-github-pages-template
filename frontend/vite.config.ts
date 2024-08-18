/// <reference types="vitest" />
import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [react()],
        base: env.REPOSITORY_NAME?`/${env.REPOSITORY_NAME}/`:'/',
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/setup.ts']
        },
    }
})
