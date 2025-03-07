const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(scss)$/i,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Turns CSS into commonjs
          "sass-loader", // Compiles Sass to CSS
          {
            loader: "postcss-loader", // Post-processing CSS
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"), // Adds vendor prefixes
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
