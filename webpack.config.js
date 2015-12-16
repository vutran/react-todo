'use strict'

const path = require('path')

let config = {}

config.entry = [
  path.join(__dirname, 'index.js')
]

config.output = {
  path: path.join(__dirname, 'lib'),
  filename: 'bundle.js'
}

config.module = {
  loaders: [
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }
  ]
}

module.exports = config
