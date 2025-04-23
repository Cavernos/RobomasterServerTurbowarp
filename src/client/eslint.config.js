import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * @type {import('eslint').Linter.Config[]}
 *
 */
export default defineConfig([
    {
        files: ['src/*.{js,mjs,cjs,ts}', 'config/*.{js,mjs,cjs,ts}', 'main.ts'],
        languageOptions: { globals: globals.browser },
    },
    globalIgnores(['**/node_modules/', '**/build/', '**/out/']),
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended
])
