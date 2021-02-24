module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    "expect": true,
    "jest": false,
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ["error", "always"],
    "import/no-named-as-default": 0,
    "vue/comment-directive": 0
  }
}
