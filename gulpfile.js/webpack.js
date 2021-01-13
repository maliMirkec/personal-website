const { helpers } = require('./helpers')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    cldnry: helpers.parse('helpers.source/config.js.src/cldnry.js'),
    cldnry2: helpers.parse('helpers.source/config.js.src/cldnry2.js')
  },
  output: {
    path: path.resolve(`${__dirname}/${helpers.parse('helpers.dist/config.js.dist/')}`),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ]
  }
}
