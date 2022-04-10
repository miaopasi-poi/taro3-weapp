/*
 * @Author: your name
 * @Date: 2022-04-11 00:01:08
 * @LastEditTime: 2022-04-11 00:01:09
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/BUI/Text/index.tsx
 */
import { ComponentType, ReactElement } from "react";
import { Text as TText } from "@tarojs/components";
import { TextProps } from "@tarojs/components/types/Text";
import { useThemeState } from "../theme";

type Props = ComponentType<TextProps & { children: any; bold?: boolean }>;

const Text: Props = ({ children, style, bold, ...props }): ReactElement => {
  const { theme } = useThemeState();
  return (
    <TText
      style={{
        color: theme.color,
        fontWeight: bold ? "bold" : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </TText>
  );
};

export default Text;
