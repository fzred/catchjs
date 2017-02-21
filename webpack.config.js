const path = require('path')
const webpack = require('webpack')
const packager = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'
let compilerOptions = {}
if (isProd) {
  compilerOptions = {
    target: 'es2015'
  }
}
module.exports = {
  entry: path.resolve(__dirname, './src/catch.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: isProd ? `catch.${packager.version}.js` : 'catch.js',
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        options: {
          compilerOptions,
        }
      },
    ]
  },
  plugins: [],
  devtool: "cheap-eval-source-map",
}

if (isProd) {
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ])
}
