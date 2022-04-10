/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-10 23:49:37
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/babel.config.js
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }],
    'linaria/babel' // 添加到 babel-preset
  ]
}
