var path = require('path');
module.exports = {
  devtool: "source-map",
  output: {
    filename: "[name].js"
  },
  externals: {
    'initMap': 'initMap',
    'map': 'map'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(frag|vert)$/,
        loader: 'webpack-glsl'
      }
    ]
  }
};
