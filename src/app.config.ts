/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-15 16:36:39
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/app.config.ts
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
  ],
  subpackages: [
    {
      root: 'spkMine',
      pages: [],
    }
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
          pagePath: 'pages/mine/index',
          text: '我的',
        }
    ],
  },
  usingComponents: {},
})
