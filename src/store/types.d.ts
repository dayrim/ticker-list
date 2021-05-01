declare module "Models" {
  import("typesafe-actions");
  import("redux-observable");

  import { StateType, ActionType } from "typesafe-actions";
  import { Epic } from "redux-observable";

  export type RootActions = ActionType<typeof import("./root-actions")>;

  export type RootState = StateType<typeof import("./root-reducer").default>;

  export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}
