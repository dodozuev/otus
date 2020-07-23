const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Utils: path.resolve(__dirname, "src/utils/"),
      Modules: path.resolve(__dirname, "src/modules/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assignment.bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
