/*
 * @Author: your name
 * @Date: 2022-04-10 23:56:40
 * @LastEditTime: 2022-04-11 10:45:27
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/pages/personalCenter/ThemeTriggerSwitch.tsx
 */
import { styled } from "linaria/react";
import { setTabBarStyle, setNavigationBarColor } from "@tarojs/taro";
import { Switch, View } from "@tarojs/components";
import { FC, ReactElement, useCallback, useMemo } from "react";
import { ThemeMode, useTheme, LightTheme, DarkTheme } from "@/components/BUI/theme";
import { Text } from "@/components/BUI";

interface IProps {}

const ThemeTriggerSwitch: FC<IProps> = (): ReactElement => {
  const [{ mode, theme }, setTheme] = useTheme();
  console.log('mode===',mode)
  console.log('theme.primary===',theme.primary)
  const isLight = useMemo(() => mode === ThemeMode.DARK, [mode]);
  
  console.log('isLight===',isLight)
  const handleChangeThemeMode = useCallback(() => {
    const themeState = isLight ? DarkTheme : LightTheme;
    setTheme(themeState);
    const { background: backgroundColor, color } = themeState.theme;
    //底部导航栏一同变化
    setTabBarStyle({
      backgroundColor,
      color,
    });
    //顶部导航栏也一同变化 只是当前页面 其他页还需设置
    setNavigationBarColor({
      backgroundColor,
      frontColor: color,
    });
  }, [isLight, setTheme]);
  
  return (
    <Container>
      <Text>{isLight ? "夜间" : "日间"}模式</Text>
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
