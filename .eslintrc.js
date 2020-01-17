module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-console': {
      allow: ['warn', 'error', 'info'],
    },
  },
};
