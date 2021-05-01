import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { RootActions, RootState, Services } from "Models";
import services from "services";

import rootEpic from "./root-epic";
import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const configureStore = (initialState?: RootState) => {
  // configure middlewares
  const epicMiddleware = createEpicMiddleware<
    RootActions,
    RootActions,
    RootState,
    Services
  >({
    dependencies: services,
  });
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);
  return store;
};

export * from "./root-actions";
export * from "./root-selectors";

export default configureStore;
