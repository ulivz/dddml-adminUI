var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.ts',
    output: {
        path: __dirname + '/web/js',
        filename: 'dddml-app.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.ts', '.tsx', '.js'],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'view': path.resolve(__dirname, './view'),
            'components': path.resolve(__dirname, './view/components'),
            'metadata': path.resolve(__dirname, './metadata'),
            'config': path.resolve(__dirname, './config'),
        }
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
};


// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.BannerPlugin('This file is created by dddml')
//     ])
// }

// /* 2.0 生产环境的配置 */
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         }),
//         new webpack.BannerPlugin('This file is created by toxichl')
//     ])
// }