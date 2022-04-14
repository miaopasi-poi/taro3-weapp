/*
 * @Author: your name
 * @Date: 2022-04-11 00:01:08
 * @LastEditTime: 2022-04-14 10:00:15
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/components/Text.tsx
 */
import { ComponentType, ReactElement } from "react"
import { Text as TText } from "@tarojs/components"
import { TextProps } from "@tarojs/components/types/Text"
import { useThemeState } from "../theme"

type Props = ComponentType<TextProps & { children: any; bold?: boolean }>

export const Text: Props = ({ children, style, bold, ...props }): ReactElement => {
  const { theme } = useThemeState()

  return (
    <TText
      style={{
        color: theme.color,
        fontWeight: bold ? "bold" : undefined,
        ...style as any,
      }}
      {...props}
    >
      {children}
    </TText>
  )
};
