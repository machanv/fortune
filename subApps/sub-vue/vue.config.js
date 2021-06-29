const { name } = require("./package");
const path = require("path");

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "./src/assets/styles/*.scss";`,
  //     },
  //   },
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.less')      //你的.scss文件所在目录
      ]
    }
  }
};
