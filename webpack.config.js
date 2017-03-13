var webpack = require("webpack");

module.exports = {
  entry: __dirname + "/app/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/inspect/dist/",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}
