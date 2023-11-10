module.exports = {
  plugins: ['unicorn'],
  // https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main?tab=readme-ov-file#rules
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/catch-error-name': 'warn',
  },
};