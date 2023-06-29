import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      name: 'brand'
    }
  }
})
