/*
 * @Author: your name
 * @Date: 2022-04-10 23:56:40
 * @LastEditTime: 2022-04-14 16:52:52
 * @LastEditors: liuxi
 * @Description: 主题切换控制组件
 * @FilePath: /taro3-weapp/src/pages/mine/ThemeTriggerSwitch.tsx
 */
import { styled } from "linaria/react";
import { setNavigationBarColor } from "@tarojs/taro";
import { Switch, View } from "@tarojs/components";
import { FC, ReactElement, useCallback, useMemo } from "react";
import { ThemeMode, useTheme, LightTheme, DarkTheme, Text } from "@/components/ThemeUI";

interface IProps {}

const ThemeTriggerSwitch: FC<IProps> = (): ReactElement => {
  const [{ mode, theme }, setTheme] = useTheme();
  const isLight = useMemo(() => mode === ThemeMode.LIGHT, [mode]);
  
  const handleChangeThemeMode = useCallback(() => {
    const themeState = isLight ? DarkTheme : LightTheme;
    setTheme(themeState);

    const { background: backgroundColor, color } = themeState.theme;
    //顶部导航栏也一同变化 只是当前页面 其他页还需设置
    setNavigationBarColor({
      backgroundColor,
      frontColor: color,
    });
  }, [isLight, setTheme]);
  
  return (
    <Container>
      <Text>{!isLight ? "夜间" : "日间"}模式</Text>
        {/* @ts-ignore */}
      <Switch color={theme.primary} checked={isLight} onChange={handleChangeThemeMode} />
    </Container>
  );
};

export default ThemeTriggerSwitch;

const Container = styled(View)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
