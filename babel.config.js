module.exports = {
  // cacheDirectory: true,
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'ninecat',
        libraryDirectory: '', // default: lib
        style: true
      }
    ],
    ['@vue/babel-plugin-jsx', { mergeProps: false }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
  ]
};
