/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-07 17:24:19
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/app.config.ts
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/personalCenter/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
        },
        {
          pagePath: 'pages/personalCenter/index',
          text: '我的',
        }
    ],
  },
  usingComponents: {},
})
