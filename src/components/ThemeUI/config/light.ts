/*
 * @Author: liuxi
 * @Date: 2022-04-11 23:05:20
 * @LastEditTime: 2022-04-11 23:13:18
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/config/light.ts
 */

import { ThemeConfigType } from  '../data.d'

const primary = "grey"
const dark = "#000000"
const color = "#ffffff"

export const lightThemeConfig: ThemeConfigType = {
    primary: primary,
    button: {
      color: color,
      backgroundColor: primary,
    },
    color: dark,
    background: color,
  }