import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

/**
 * @type {[]}
 */
export default defineConfig({
    plugins: [viteTsconfigPaths(), checker({ typescript: true })],

    build: {
        outDir: 'build',
        emptyOutDir: true,
        manifest: true,
        minify: true,
        lib: {
            name: 'RobomasterScratchExtension',
            entry: 'main.ts',
            fileName: 'extension',
            formats: ['es'],
        },
        watch: null,
    },
})
