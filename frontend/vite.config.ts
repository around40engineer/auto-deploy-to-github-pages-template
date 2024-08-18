/// <reference types="vitest" />
import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    process.env = {...process.env,...loadEnv(mode, process.cwd())}

    return {
        plugins: [react()],
        base: process.env.VITE_REPOSITORY_NAME?`/${process.env.VITE_REPOSITORY_NAME}/`:'/',
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/setup.ts']
        },
    }
})
