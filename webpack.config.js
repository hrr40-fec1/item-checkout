const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
