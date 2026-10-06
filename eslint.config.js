import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['public/**', '.cache/**', '.netlify/**'],
  },
  js.configs.recommended,
  {
    files: ['src/js/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['*.js', 'eleventy/**/*.js', 'scripts/**/*.js', 'netlify/**/*.js', 'site/_data/**/*.js', 'test/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    // CLI scripts report progress on stdout.
    files: ['scripts/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
]
