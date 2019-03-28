const BrotliPlugin = require('brotli-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/**
 * Plugins for production environment
 */
module.exports = {
  prodPlugins: [
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
    new BundleAnalyzerPlugin(),
  ],
}
