const path = require('path')
const webpack = require('webpack')
const packager = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: path.resolve(__dirname, './src/catch.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: isProd ? `catch.${packager.version}.js` : 'catch.js',
  },
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: 'es2015'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
//          presets: ['es2015'],
          plugins: isProd ? [ // dev模式不转换es6的代码
            require("babel-plugin-transform-es2015-template-literals"),
            require("babel-plugin-transform-es2015-literals"),
            require("babel-plugin-transform-es2015-function-name"),
            require("babel-plugin-transform-es2015-arrow-functions"),
            require("babel-plugin-transform-es2015-block-scoped-functions"),
            require("babel-plugin-transform-es2015-classes"),
            require("babel-plugin-transform-es2015-object-super"),
            require("babel-plugin-transform-es2015-shorthand-properties"),
            require("babel-plugin-transform-es2015-computed-properties"),
            require("babel-plugin-transform-es2015-for-of"),
            require("babel-plugin-transform-es2015-sticky-regex"),
            require("babel-plugin-transform-es2015-unicode-regex"),
            require("babel-plugin-check-es2015-constants"),
            require("babel-plugin-transform-es2015-spread"),
            require("babel-plugin-transform-es2015-parameters"),
            require("babel-plugin-transform-es2015-destructuring"),
            require("babel-plugin-transform-es2015-block-scoping"),
            require("babel-plugin-transform-es2015-typeof-symbol"),
            [require("babel-plugin-transform-regenerator"), { async: false, asyncGenerators: false }],
          ] : []
        },
      }
    ]
  },
  plugins: [],
//  devtool: "cheap-eval-source-map",
}

//if (isProd) {
//  module.exports.plugins = module.exports.plugins.concat([
//    new webpack.DefinePlugin({
//      'process.env': {
//        NODE_ENV: '"production"'
//      }
//    }),
//    new webpack.optimize.UglifyJsPlugin({
//      compress: {
//        warnings: false
//      }
//    }),
//  ])
//}
