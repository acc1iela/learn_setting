const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'development',
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
      },
      {
        test: /\.pcss/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: { plugins: [ require('postcss-nested') ] },
            },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },

  optimization: {
    //minimizaer: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
};
