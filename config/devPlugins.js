const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

const projectDir = path.resolve(__dirname, '../')
const HTML_TEMPLATE = path.resolve(projectDir, './public/index.html')
const DOCS_ASSETS_PATH = path.resolve(projectDir, './docs')
const BUILD_ASSETS_PATH = path.resolve(projectDir, './build')
const ASSET_PLUGIN_PATH = process.env.BUILD_ENV === 'github' ? DOCS_ASSETS_PATH : BUILD_ASSETS_PATH

/**
 * Plugins for dev environment
 */
module.exports = {
  devPlugins: [
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE,
      title: 'thhmoc67-info-web',
    }),
    new AssetsPlugin({
      prettyPrint: true,
      filename: 'assets.json',
      path: ASSET_PLUGIN_PATH,
    }),
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new Dotenv(),
  ],
}
