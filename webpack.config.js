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
  module:{
    rules:[
      {
        test:/.js$/,
        use:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader', // 将js字符串生成为style节点（最后执行）
          'css-loader', // 将css转成CommonJS模块（其次执行）
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader', // 将js字符串生成为style节点（最后执行）
          'css-loader', // 将css转成CommonJS模块（其次执行）
          'sass-loader' // 将sass转成css（最先执行）
        ]
      }
    ]
  },
  mode: "production",
};
