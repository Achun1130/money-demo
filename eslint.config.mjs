// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-console': 'warn',

    '@typescript-eslint/no-explicit-any': 'warn',

    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'always',
        },
      },
    ],
    'vue/no-multiple-template-root': 'off',
  },
});
