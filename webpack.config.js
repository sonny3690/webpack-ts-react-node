const path = require('path');
// const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
  },
};

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'home.js': path.resolve(__dirname, 'src/public/home.js'),
  },
  module: {
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]',
  },
};

module.exports = [serverConfig, clientConfig];
