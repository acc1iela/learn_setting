const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'my-bundle.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
    filename: './css/index.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  optimization: {
    //minimizaer: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
};
