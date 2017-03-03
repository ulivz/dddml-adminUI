var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.ts',
    output:{
        path:'./web/js',
        filename:'dddml-app.js',
        publicPath:"/web/js/"
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.ts', '.tsx', '.js'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'view': path.resolve(__dirname, '../view'),
            'components': path.resolve(__dirname, '../view/components'),
            'metadata': path.resolve(__dirname, '../metadata'),
            'config': path.resolve(__dirname, '../config'),
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
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url'
            }
        ]
    }
};