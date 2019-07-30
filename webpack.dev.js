const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'none',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/")
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
})