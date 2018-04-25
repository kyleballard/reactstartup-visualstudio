var path = require('path');

module.exports = {
    entry: [
        './ClientApp/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        port: 51934, 
        contentBase: './wwwroot/'
    }
};