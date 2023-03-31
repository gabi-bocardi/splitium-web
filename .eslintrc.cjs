/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest'
  },
  extends: [
    'plugin: vue/base',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  plugins: ['@typescript-eslint'],
}
