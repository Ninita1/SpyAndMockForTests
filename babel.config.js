
module.exports = {
  plugins:
  [
    ['@babel/plugin-transform-runtime', { corejs: false }],
    // eslint-disable-next-line no-template-curly-in-string
    ['transform-imports', { lodash: { transform: 'lodash/${member}' } }]
  ],
  env: {
    production: {
      plugins: [
        'transform-react-remove-prop-types'
      ]
    },
    test: {
      presets: [
        '@babel/env',
        '@babel/react',
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        // Stage 2
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',

        // Stage 3
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-json-strings'

      ]
    },
    commonJS: {
      presets: [
        ['@babel/env', {
          targets: {
            browsers: [
              'ie 11',
              'last 3 Chrome versions',
              'last 3 Firefox versions',
              'last 3 Edge versions',
            ]
          }
        }],
        '@babel/react'
      ]
    },
    buildES6: {
      presets: [
        ['@babel/env', {
          modules: false,
          loose: true,
          targets: {
            browsers: [
              'ie 11',
              'last 3 Chrome versions',
              'last 3 Firefox versions',
              'last 3 Edge versions',
            ]
          }
        }],
        '@babel/react',
        ['minify', { builtIns: false, evaluate: false, mangle: false }]
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        // Stage 2
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',

        // Stage 3
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-json-strings'

      ]
    }
  }
};
