import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  { ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/coverage/**'] },

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { '@typescript-eslint': ts, import: importPlugin, prettier: prettierPlugin, 'simple-import-sort': simpleImportSort },
    rules: {
      'import/order': 'off',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'prettier/prettier': ['error'],
    },
  },

  // Deactivate rules of prettier that conflicts with eslint
  prettier,
];
