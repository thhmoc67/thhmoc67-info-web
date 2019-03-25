const path = require("path"),
  webpack = require("webpack"),
  AssetsPlugin = require("assets-webpack-plugin"),
  BrotliPlugin = require("brotli-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const isProd = process.env.NODE_ENV == "production",
  APP_DIR = path.resolve(__dirname, "../src/index.js"),
  HTML_TEMPLATE = path.resolve(__dirname, "../public/index.html"),
  DEV_SERVER_CONTENT_BASE = path.join(__dirname, "../public/"),
  OUTPUT_PATH = path.resolve(__dirname, "../docs"),
  ASSET_PLUGIN_PATH = path.resolve(__dirname, "../docs");
/**
 * Plugins for dev environment
 */
const devPlugins = [
  new HtmlWebpackPlugin({
    template: HTML_TEMPLATE,
    title: "thhmoc67-info-web",
  }),
  new AssetsPlugin({
    prettyPrint: true,
    filename: "assets.json",
    path: ASSET_PLUGIN_PATH,
  }),
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(process.env.NODE_ENV || "development"),
  }),
];
/**
 * Plugins for production environment
 */
const prodPlugins = [
  new BrotliPlugin({
    asset: "[path].br[query]",
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  }),
];
/**
 * Merging plugins on the basis of env
 */
const pluginList = isProd ? [...devPlugins, ...prodPlugins] : devPlugins;

module.exports = {
  // May add cheap-module-source-map to devtool to generate source maps to prod builds
  devtool: isProd ? "" : "inline-source-map",
  entry: APP_DIR,
  output: {
    filename: isProd ? "[name].[chunkhash].js" : "[name].bundle.js",
    path: OUTPUT_PATH,
    // publicPath: "build/client/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: pluginList,
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    contentBase: DEV_SERVER_CONTENT_BASE,
    port: 3000,
    publicPath: "http://localhost:3000",
    hotOnly: true,
  },
};