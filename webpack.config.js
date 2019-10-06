const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              formatter: 'codeFrame'
            }
          }
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [new CopyPlugin(['manifest.json'])],
  resolve: {
    extensions: ['.ts']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
