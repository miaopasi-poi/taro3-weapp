/*
 * @Author: liuxi
 * @Date: 2022-04-11 23:05:12
 * @LastEditTime: 2022-04-11 23:08:33
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/config/dark.ts
 */
import { ThemeConfigType } from  '../data.d';

const primary = "red"
const backgroundColor = "#000000"
const color = "#ffffff"

export const darkThemeConfig: ThemeConfigType = {
    primary: primary,
    button: {
        color: color,
        backgroundColor: primary,
    },
    color: color,
    background: backgroundColor,
}