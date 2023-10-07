module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "arrow-spacing": ['warn', { 'before': true, 'after': true }],
    "block-spacing": 'warn',
    "brace-style": ['warn', '1tbs', { 'allowSingleLine': true }],
    "indent": ['warn', 2 ],
    "no-multiple-empty-lines": ['warn', {'max': 2}],
    "quotes": ['warn', 'single']
  },
}
