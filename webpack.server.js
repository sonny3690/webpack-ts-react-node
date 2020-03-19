const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.ts",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader"
      }
    ]
  }
};
\;
