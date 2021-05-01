import { createReducer } from "typesafe-actions";
import { RootActions, AppState } from "Models";

import * as actions from "./actions";

const initialState = {
  ready: false,
};

const reducer = createReducer<AppState, RootActions>(
  initialState
).handleAction(actions.appStartAction, (state) => ({ ...state, ready: true }));

export default reducer;
