const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Set the base directory for serving files
        port: 8564, // Specify the port (you can use any available port)
        open: true, // Automatically open the default web browser
    },
    entry: './js/dashboard_main.js', // Adjust the entry point as needed
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, // This rule will match .css files
                use: ['style-loader', 'css-loader', 'image-webpack-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // This rule will match image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/', // Output path for images
                        },
                    },
                ],
            },
        ],
    },
};
