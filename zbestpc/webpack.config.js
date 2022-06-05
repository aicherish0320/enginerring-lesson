const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ProvidePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        },
        generator: {
          filename: 'images/[name].[hash:6][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html'
    }),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
