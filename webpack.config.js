const webpack = require('webpack')
const packager = require('./package.json')

module.exports = {
    entry: './st.js',
    output: {
        path: './dist',
        filename: `st.${packager.version}.js`,
    },
    plugins: [],
}

if (process.env.NODE_ENV === 'production') {
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