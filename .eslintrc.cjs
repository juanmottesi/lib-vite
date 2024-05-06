module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'comma-dangle': ["error", "always-multiline"],
    'max-len': ["error", { "code": 150 }],
    'semi-style': ["error", "last"],
    'semi': ["error", "always"],
    'brace-style': "error",
    'comma-spacing': ["error", { "before": false, "after": true }]
  },
}
