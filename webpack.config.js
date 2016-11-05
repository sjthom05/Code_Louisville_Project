var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: path.join(__dirname + '/app'),
    entry: {
        app: './app.js',
        vendor: ['angular','angular-route']
    },
    output: {
        path: path.join(__dirname + '/public/scripts'),
        filename: 'app.bundle.js'
    },
    plugins: [
        //new webpack.ProvidePlugin({$: 'jquery', jQuery: "jquery", jquery: 'jquery'}),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
