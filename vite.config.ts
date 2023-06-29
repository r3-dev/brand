import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({ insertTypesEntry: true })
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      name: 'brand'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})
