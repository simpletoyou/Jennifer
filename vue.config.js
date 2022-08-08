/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-14 10:57:38
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-14 10:57:38
 */
module.exports = {
  devServer: {
    // 端口号
    port: 9999,
    // 配置不同的后台API地址
    // proxy: {
    //   '/api': {
    //     target: 'http://www.dzm.com',
    //     ws: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    pluginOptions: {
      "style-resources-loader": {
        preProcessor: "less",
        patterns: [
          // 全局变量路径，不能使用路径别名
          path.resolve(__dirname, "./src/css/variables.less"),
        ],
      },
    },
  }
}
