const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/app/vendor.js"
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "image-[hash].[ext]",
            outputPath: "img"
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    })
  ]
}