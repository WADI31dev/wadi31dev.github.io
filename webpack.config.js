const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
   //will automatically inject bundle js into ./dist/index.html
   new HTMLWebpackPlugin({
       template: './src/index.html', //source
       filename: 'index.html'  //destination
   })
  ]
};
