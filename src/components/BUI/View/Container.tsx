/*
 * @Author: your name
 * @Date: 2022-04-11 00:00:23
 * @LastEditTime: 2022-04-11 11:10:45
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/BUI/View/Container.tsx
 */
import { setNavigationBarColor, useDidShow } from "@tarojs/taro";
import { useThemeState } from "../theme";
import View, { IProps } from "./index";

const Container: IProps = (props) => {
  const { theme } = useThemeState();
console.log('Container====theme', theme)
  useDidShow(() => {
    // 导航栏不会随主题变化只会在当前的页面生效
    // 因此每个也都要统一导航栏主题
    setNavigationBarColor({
      backgroundColor: theme.background,
      frontColor: theme.color,
    });
    console.log("set navigate style");
  });

  return <View {...props} />;
};

export default Container;
