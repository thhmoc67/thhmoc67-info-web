const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production'
const APP_DIR = path.resolve(__dirname, '../src/index.js')
const HTML_TEMPLATE = path.resolve(__dirname, '../public/index.html')
const DEV_SERVER_CONTENT_BASE = path.join(__dirname, '../public/')
const OUTPUT_PATH = path.resolve(__dirname, '../docs') // ../build/client for production
const ASSET_PLUGIN_PATH = path.resolve(__dirname, '../docs') // ../build for production
/**
 * Plugins for dev environment
 */
const devPlugins = [
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
  new BundleAnalyzerPlugin(),
]
/**
 * Plugins for production environment
 */
const prodPlugins = [
  new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  }),
]
/**
 * Merging plugins on the basis of env
 */
const pluginList = isProd ? [...devPlugins, ...prodPlugins] : devPlugins

module.exports = {
  // May add cheap-module-source-map to devtool to generate source maps to prod builds
  devtool: isProd ? '' : 'inline-source-map',
  entry: APP_DIR,
  output: {
    filename: isProd ? '[name].[chunkhash].js' : '[name].bundle.js',
    path: OUTPUT_PATH,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: pluginList,
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    contentBase: DEV_SERVER_CONTENT_BASE,
    port: 3000,
    publicPath: 'http://localhost:3001',
    hotOnly: true,
    historyApiFallback: true,
  },
}
