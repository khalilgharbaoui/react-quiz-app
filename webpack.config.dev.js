var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
     {
       test: /\.jsx?/,
       loaders: ['babel'],
       include: path.join(__dirname, 'src')
     },
     { test: /\.woff2?$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
     { test: /\.ttf$/,    loader: "file-loader" },
     { test: /\.eot$/,    loader: "file-loader" },
     { test: /\.svg$/,    loader: "file-loader" },
     { test: /\.png$/,    loader: "file-loader" },
     { test: /\.scss$/,   loader: 'style!css!sass'}
   ]
  }
};
