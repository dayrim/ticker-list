import { combineEpics } from "redux-observable";

import * as App from "../features/App/state/epic";

export default combineEpics(...Object.values(App));
