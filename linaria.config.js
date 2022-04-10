/*
 * @Author: lucia
 * @Date: 2022-04-10 23:50:00
 * @LastEditTime: 2022-04-10 23:55:29
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/linaria.config.js
 */
// linaria 配置详见 https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options
module.exports = {
    rules: [
      {
        action: require("linaria/evaluators").shaker,
      },
      {
        test: /node_modules[\/\\](?!@tarojs)/,
        action: "ignore"
      }
    ]
  }