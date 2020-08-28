// "use strict";

const path = require("path");
module.exports = {
  entry: {
    search: "./src/search/index",
    index: "./src/index/index",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-[hash].js",
  },
  mode: "production",
};
