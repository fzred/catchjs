const webpack = require('webpack')
const packager = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './catch.js',
    output: {
        path: './dist',
        filename: isProd ? `catch.${packager.version}.js` : 'catch.js',
    },
    plugins: [],
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
