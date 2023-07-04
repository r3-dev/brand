import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: 'src/index.ts',
      name: 'badge',
      formats: [
        'es',
        'cjs',
        'umd'
      ],
      fileName: (format) => `index.${format}.js`
    }
  }
})
