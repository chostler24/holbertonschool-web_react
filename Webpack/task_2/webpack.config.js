const path = require('path');

module.exports = {
    mode: 'production',
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
