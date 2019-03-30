const path = require('path')
const { getAlias } = require('./alias')

const isProd = process.env.NODE_ENV === 'production'
const isGithub = process.env.BUILD_ENV === 'github'
const projectDir = path.resolve(__dirname, '../')

const APP_DIR = path.resolve(projectDir, './src/index.js')
const DEV_SERVER_CONTENT_BASE = path.join(projectDir, './public/')
const DOCS_PATH = path.resolve(projectDir, './docs')
const BUILD_PATH = path.resolve(projectDir, './build/client')
const OUTPUT_PATH = isGithub ? DOCS_PATH : BUILD_PATH
const PATH_SRC = path.resolve(projectDir, './src')
const { devPlugins } = require('./devPlugins')
const { prodPlugins } = require('./prodPlugins')

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
    publicPath: isGithub ? '' : '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { presets: ['@babel/env'] },
        include: [PATH_SRC],
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        include: [PATH_SRC],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]',
              emitFile: true,
            },
          },
        ],
      },
    ],
  },
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
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
    alias: getAlias(PATH_SRC),
  },
  plugins: pluginList,
  devServer: {
    contentBase: DEV_SERVER_CONTENT_BASE,
    port: 3000,
    publicPath: 'http://localhost:3001',
    hotOnly: true,
    historyApiFallback: true,
  },
}
