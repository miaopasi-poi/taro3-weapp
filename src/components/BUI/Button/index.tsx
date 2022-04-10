/*
 * @Author: your name
 * @Date: 2022-04-11 00:01:38
 * @LastEditTime: 2022-04-11 00:01:39
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/BUI/Button/index.tsx
 */
import { ComponentType } from "react";
import { Button as TButton, ButtonProps } from "@tarojs/components";
import { useThemeState } from "../theme";

type TButtonProps = ComponentType<ButtonProps & { width?: string; bold?: boolean }>;

export const Button: TButtonProps = ({ children, style, bold, width, ...props }) => {
  const { theme } = useThemeState();

  return (
    <TButton
      style={{
        width,
        color: theme.button.color,
        backgroundColor: theme.button.backgroundColor,
        fontWeight: bold ? "bold" : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </TButton>
  );
};

