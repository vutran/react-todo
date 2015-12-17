'use strict'

const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

let config = {}

config.entry = [
  path.join(__dirname, 'src/index.js')
]

config.output = {
  path: path.join(__dirname, 'lib'),
  filename: 'index.js',
  library: 'react-todo',
  libraryTarget: 'commonjs2'
}

config.resolve = {
  extensions: ['', '.js', '.scss']
}

config.module = {
  loaders: [
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css', 'sass')
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }
  ]
}

config.plugins = [
  new ExtractTextPlugin('styles.scss'),
]

module.exports = config
