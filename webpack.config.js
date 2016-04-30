var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
   extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, 'src')
        ]
      },
      {
        test: /\.scss$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
