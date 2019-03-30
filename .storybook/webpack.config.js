// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path')
const { getAlias } = require('../config/alias')
const PATH_SRC = path.resolve(__dirname, '../src')


module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: { extensions: ['*', '.js', '.jsx'], alias: getAlias(PATH_SRC) },
  module: {
    rules: [
      {
        test: /\.scss$|\.css$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            } // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            } // compiles Sass to CSS
          }
        ]
      }
    ]
  }
}
