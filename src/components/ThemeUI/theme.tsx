/*
 * @Author: liuxi
 * @Date: 2022-04-10 23:58:00
 * @LastEditTime: 2022-04-13 14:35:05
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/components/ThemeUI/theme.tsx
 */
import { createContext, useContext, useState } from "react"
import { ThemeMode, ThemePropsType } from './data';
import { darkThemeConfig, lightThemeConfig } from './config'


export const LightTheme: ThemePropsType = {
  theme: lightThemeConfig,
  mode: ThemeMode.LIGHT,
}

export const DarkTheme: ThemePropsType = {
  theme: darkThemeConfig,
  mode: ThemeMode.DARK,
}

export const Theme = createContext(LightTheme)

export const ThemeProvider = ({ children }) => {
  const theme = useState<ThemePropsType>(LightTheme)
  //@ts-ignore
  return <Theme.Provider value={theme}>{children}</Theme.Provider>
}

export const useThemeState = (): ThemePropsType => useContext(Theme)[0]
export const useSetTheme = () => useContext(Theme)[1]

export const useTheme = (): [ThemePropsType, React.Dispatch<React.SetStateAction<ThemePropsType>>] => useContext<any>(Theme)


