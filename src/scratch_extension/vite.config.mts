import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

/**
 * @type {[]}
 */
export default defineConfig({
    plugins: [viteTsconfigPaths()],
    build: {
        outDir: '../app/assets/js',
        emptyOutDir: true,
        minify: true,
        lib: {
            name: 'RobomasterScratchExtension',
            entry: 'main.ts',
            fileName: 'index',
            formats: ['es'],
        },
        watch: null,
    },
})
