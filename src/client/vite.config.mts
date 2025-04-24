import { defineConfig, loadEnv } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

/**
 * @type {[]}
 */
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
    return defineConfig({
        plugins: [viteTsconfigPaths(), checker({ typescript: true })],
        envDir: 'environments',

        build: {
            outDir: 'build',
            emptyOutDir: false,
            manifest: true,
            minify: true,
            lib: {
                name: 'RobomasterTurbowarpExtension',
                entry: 'main.ts',
                fileName: `${process.env.npm_package_name}_${mode}-${process.env.npm_package_version}`,
                formats: ['es'],
            },
            watch: null,
        },
    })
}
