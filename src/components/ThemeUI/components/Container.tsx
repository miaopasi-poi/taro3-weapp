/*
 * @Author: your name
 * @Date: 2022-04-11 00:00:23
 * @LastEditTime: 2022-04-14 16:53:39
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/components/Container.tsx
 */
import { setNavigationBarColor, useDidShow } from "@tarojs/taro"
import { useThemeState } from "../theme"
import { IProps, View } from "./View"

export const Container: IProps = (props) => {
  const { theme } = useThemeState()
  
  useDidShow(() => {
    // 导航栏不会随主题变化只会在当前的页面生效
    // 因此每个也都要统一导航栏主题
    setNavigationBarColor({
      backgroundColor: theme.background,
      frontColor: theme.color,
    })
  })

  // @ts-ignore
  return <View {...props} />
}
