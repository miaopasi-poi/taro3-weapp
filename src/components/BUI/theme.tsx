import { createContext, useContext, useState } from "react";

const darkPrimary = "#666666";
const lightPrimary = "#5511ff";
const dark = "#000000";
const light = "#ffffff";

interface ITheme {
  primary: string;
  button: {
    color: string;
    backgroundColor: string;
  };
  color: string;
  background: string;
}

export enum ThemeMode {
  DARK = "dark",
  LIGHT = "light",
}

const darkTheme: ITheme = {
  primary: darkPrimary,
  button: {
    color: light,
    backgroundColor: darkPrimary,
  },
  color: light,
  background: dark,
};

const lightTheme: ITheme = {
  primary: lightPrimary,
  button: {
    color: light,
    backgroundColor: lightPrimary,
  },
  color: dark,
  background: light,
};

interface ThemeProps {
  theme: ITheme;
  mode: ThemeMode;
}

export const LightTheme: ThemeProps = {
  theme: lightTheme,
  mode: ThemeMode.LIGHT,
};

export const DarkTheme: ThemeProps = {
  theme: darkTheme,
  mode: ThemeMode.DARK,
};

const Theme = createContext(LightTheme);

const HUIProvide = ({ children }) => {
  const theme = useState<ThemeProps>(LightTheme);
  //@ts-ignore
  return <Theme.Provider value={theme}>{children}</Theme.Provider>;
};

export const useSetTheme = () => useContext(Theme)[1];
export const useThemeState = (): ThemeProps => useContext(Theme)[0];
export const useTheme = (): [ThemeProps, React.Dispatch<React.SetStateAction<ThemeProps>>] => useContext(Theme);

export default HUIProvide;
