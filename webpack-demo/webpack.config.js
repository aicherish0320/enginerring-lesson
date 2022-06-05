const path = require('path')
const webpack = require('webpack')
const FooterPlugin = require('./plugin/FooterPlugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ac$/,
        use: [path.resolve(__dirname, './loader/acLoader.js')]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'banner'
    }),
    new FooterPlugin({
      banner: 'footer'
    })
  ]
}
