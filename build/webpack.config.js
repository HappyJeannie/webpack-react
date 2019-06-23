const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module:{
    rules: [
      {
        test:/\.js?$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test:/\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader:"css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ],
  resolve: {
    alias: {
      '@assets':path.resolve(__dirname, './../src/assets'),
      '@pages':path.resolve(__dirname, './../src/pages'),
      '@api':path.resolve(__dirname, './../src/api'),
      '@components':path.resolve(__dirname, './../src/components'),
      '@modules':path.resolve(__dirname, './../src/modules'),
      '@router':path.resolve(__dirname, './../src/router')
    }
  }
}
