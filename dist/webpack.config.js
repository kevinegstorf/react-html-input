var path = require('path');
module.exports = {
    mode: 'none',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
            },
        ],
    },
    externals: {
        react: 'commonjs react',
    },
};
