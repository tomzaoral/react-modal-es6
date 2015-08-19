var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './examples/basic/app'
  ],

  output: {
    path: path.join(__dirname, 'examples', '__build__'),
    filename: 'bundle.js',
    publicPath: '/__build__/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
