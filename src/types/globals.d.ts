declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}
declare module "@material-ui/core/styles/createMuiTheme" {
  import("@material-ui/core/styles/createMuiTheme");
  import {
    createMuiTheme,
    Theme as SourceTheme,
    ThemeOptions as SourceThemeOptions,
  } from "@material-ui/core/styles";

  type CustomProperties = typeof import("assets/theme").customProperties;
  type CustomTheme = CustomProperties & SourceTheme;
  type CustomThemeOptions = CustomProperties & SourceThemeOptions;

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends SourceThemeOptions {}

  export default function createMuiTheme(
    options?: ThemeOptions,
    ...args: object[]
  ): Theme;
}
