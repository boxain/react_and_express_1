/* webpack.config.js : Webpack setting document ?*/ 

const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target : 'node',
  externals: [nodeExternals()],
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
  /* 設定你的檔案選項 */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
}
