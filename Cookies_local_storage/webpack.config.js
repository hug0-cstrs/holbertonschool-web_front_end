const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Définir le mode sur 'development'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '/root/holberton/holbertonschool-web_front_end/Cookies_local_storage/0-index.html',
    }),
  ],
};
