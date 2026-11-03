import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist/'] },
  js.configs.recommended,
  {
    // Game code runs in the browser.
    files: ['src/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Config files run in Node.
    files: ['*.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  // Turn off style rules that Prettier already handles.
  prettier,
];
