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
        react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    },
};
