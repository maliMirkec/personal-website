const {
  helpers
} = require('./helpers')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    sb: helpers.parse('helpers.source/config.js.src/sb.js')
  },
  output: {
    path: path.resolve(`${__dirname}/${helpers.parse('helpers.dist/config.js.dist/')}`),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}
