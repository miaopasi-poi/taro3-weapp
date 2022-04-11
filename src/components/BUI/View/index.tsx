/*
 * @Author: your name
 * @Date: 2022-04-10 23:59:45
 * @LastEditTime: 2022-04-11 11:09:01
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/BUI/View/index.tsx
 */
import { ComponentType, ReactElement } from "react";
import { ViewProps } from "@tarojs/components/types/View";
import { View as TView } from "@tarojs/components";
import { useThemeState } from "../theme";

export type IProps = ComponentType<ViewProps & { fill?: boolean }>;

const View: IProps = ({ children, fill, style, ...props }): ReactElement => {
  const { theme } = useThemeState();
  console.log('View====', theme)
  return (
    <TView
      style={{
        backgroundColor: theme.background,
        width: fill ? "100vw" : undefined,
        height: fill ? "100vh" : undefined,
        color: theme.color,
        ...style as any,
      }}
      {...props}
    >
      {children}
    </TView>
  );
};

export default View;
