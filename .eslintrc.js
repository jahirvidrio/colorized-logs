module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'all', 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    'eqeqeq': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', 120],
    'prefer-arrow-callback': 'error',
    'require-jsdoc': 'off',
    'no-unused-vars': 'off',
  },
};
