import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: "../app/assets/js",
        emptyOutDir: true,
        minify: true,
        lib: {
            name: "RobomasterScratchExtension",
            entry: "main.js",
            fileName: "index",
            formats: ['es'],
            minifyEs: true
        },
        rollupOptions: {
            external: false
        },
        watch: true
    },
})