module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  // },
  parser: 'babel-eslint',
  plugins: ['react', 'import'],
  rules: {
    semi: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-multiple-empty-lines': ['error', { max: 1 }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js'
      }
    },
    'import/extensions': ['.js', '.jsx']
  },
  globals: {}
}
