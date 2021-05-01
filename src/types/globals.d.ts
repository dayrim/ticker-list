declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}
declare namespace Jss {
  /** You can use the global `Jss.Theme` interface to define a project-wide default theme. */
  type CustomTheme = typeof import("assets/theme").default;
  export interface Theme extends CustomTheme {}
}
