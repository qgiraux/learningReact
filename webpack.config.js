const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Rule for JS/JSX files (for React code)
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Rule for CSS files (stylesheets)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // This handles CSS imports
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Allow importing JS/JSX without specifying extension
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000, // default port for the dev server
    hot: true,  // enable hot module replacement (HMR)
  },
};

