import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = dotenv.config({ path: `.env.${mode}` }).parsed;
  const envWithPrefix = Object.entries(env).reduce(
    (prev, [key, value]) => {
      return {
        ...prev,
        [`VITE_${key}`]: value,
      };
    },
    {}
  );

  return {
    plugins: [react()],
    define: {
      'import.meta.env': JSON.stringify(envWithPrefix),
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
