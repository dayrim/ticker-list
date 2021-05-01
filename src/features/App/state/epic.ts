import { filter, tap, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { isActionOf } from "typesafe-actions";
import { RootEpic } from "Models";

import * as actions from "./actions";

export const appStartEpic: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.appStartAction)),
    tap(() => console.log(`Debug appStartEpic`)),
    switchMap(() => of())
  );
