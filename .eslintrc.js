module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Recommended linting rules for Vue 3
    'plugin:nuxt/recommended', // Recommended rules for Nuxt
    'prettier', // Prettier integration
  ],
  plugins: ['vue', 'nuxt'],
  rules: {
    // Custom rules (if needed)
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
