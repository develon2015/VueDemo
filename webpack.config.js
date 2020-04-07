const VueLoaderPlugin = require('vue-loader/lib/plugin');

const project = 'css3'
const home = __dirname + '/vue/' + project;
const dist = home + '/dist';

const config = {
    entry: home + '/index.js',
    output: {
        path: dist,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader', },
            { test: /\.css$/, use: [ 'vue-style-loader', 'css-loader', ], },
            { test: /\.(png|jpg|ico|mkv|m4a)$/, loader: 'url-loader?limit=10240', },
        ],
    },
    plugins: [ new VueLoaderPlugin(), ],
    mode: 'development',
    devServer: {
        contentBase: dist,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    devtool: 'inline-source-map',
};
module.exports = config;