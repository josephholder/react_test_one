var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  //required
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
     }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'buble'
      }
    ]
  }
};
