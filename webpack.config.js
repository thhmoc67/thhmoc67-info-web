const path = require("path"),
  webpack = require("webpack"),
  AssetsPlugin = require("assets-webpack-plugin"),
  BrotliPlugin = require("brotli-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const isProd = process.env.NODE_ENV == "production";

/**
 * Plugins for dev environment
 */
const devPlugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    title: "thhmoc67-info-web",
  }),
  new AssetsPlugin({
    prettyPrint: true,
    filename: "assets.json",
    path: path.resolve(__dirname, "build"),
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
  entry: "./src/index.js",
  output: {
    filename: isProd ? "[name].[chunkhash].js" : "[name].bundle.js",
    path: path.resolve(__dirname, "build/client"),
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
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000",
    hotOnly: true,
  },
};
