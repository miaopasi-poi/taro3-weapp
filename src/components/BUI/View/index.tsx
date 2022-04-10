import { ComponentType, ReactElement } from "react";
import { ViewProps } from "@tarojs/components/types/View";
import { View as TView } from "@tarojs/components";
import { useThemeState } from "../theme";

export type IProps = ComponentType<ViewProps & { fill?: boolean }>;

const View: IProps = ({ children, fill, style, ...props }): ReactElement => {
  const { theme } = useThemeState();
  return (
    <TView
      style={{
        backgroundColor: theme.background,
        width: fill ? "100vw" : undefined,
        height: fill ? "100vh" : undefined,
        color: theme.color,
        ...style,
      }}
      {...props}
    >
      {children}
    </TView>
  );
};

export default View;
