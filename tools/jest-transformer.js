const config = {
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};
module.exports = require('babel-jest').createTransformer(config);