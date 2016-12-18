var path = require('path');
module.exports = {
  devtool: "source-map",
  entry: {
    app: './source/js/app.js',
    webgl: './source/js/webgl.js',
    gmap: './source/js/gmap.js'
  },
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
