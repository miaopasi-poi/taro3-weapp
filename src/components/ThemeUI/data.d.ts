/*
 * @Author: liuxi
 * @Date: 2022-04-11 22:50:47
 * @LastEditTime: 2022-04-11 22:57:54
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/data.d.ts
 */
export interface ThemeConfigType {
    primary: string
    button: {
        color: string
        backgroundColor: string
    }
    color: string
    background: string
}

export enum ThemeMode {
    DARK = "dark",
    LIGHT = "light",
}


export interface ThemePropsType {
    theme: ThemeConfigType
    mode: ThemeMode
}