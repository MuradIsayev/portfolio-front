import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // Vite config
    plugins: [react()],
    server: {
      proxy: { // proxy setting
        '/api': {
          target: 'https://portfolio-back-production-f61e.up.railway.app',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
    define: {
      // Set the environment variables in your application
      __APP_ENV__: env.APP_ENV,
    },
  }
})