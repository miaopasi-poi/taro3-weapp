/*
 * @Author: liuxi
 * @Date: 2022-04-11 00:01:38
 * @LastEditTime: 2022-04-14 17:19:48
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/components/Button.tsx
 */
import { ComponentType } from "react"
import { Button as TButton, ButtonProps } from "@tarojs/components"
import { useThemeState } from "../theme"

type TButtonProps = ComponentType<ButtonProps & { width?: string; bold?: boolean }>

export const Button: TButtonProps = ({ children, style, bold, width, ...props }) => {
  const { theme } = useThemeState()

  // @ts-ignore
  return <TButton
      style={{
        width,
        color: theme.button.color,
        backgroundColor: theme.button.backgroundColor,
        fontWeight: bold ? "bold" : undefined,
        ...style as any,
      }}
      {...props}
    >
      {children}
    </TButton>
}

