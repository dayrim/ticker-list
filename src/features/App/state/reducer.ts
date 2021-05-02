import { createReducer } from "typesafe-actions";
import { RootActions, AppState, Asset } from "Models";
import { cloneDeep } from "lodash";
import services from "services";

import * as actions from "./actions";

const LocalStorage = services.LocalStorage;

const appInitState: AppState = {
  assetList: [],
  availableAssets: [],
  singleAsset: undefined,
};

const app = createReducer<AppState, RootActions>(appInitState)
  .handleAction(actions.initAssetList, (state) => {
    let assetList = LocalStorage.get<Asset[]>("assetList");
    if (!assetList) {
      assetList = appInitState.assetList;
      LocalStorage.set("assetList", assetList);
    }
    return { ...state, assetList };
  })
  .handleAction(actions.fetchAvailableAssets.success, (state, action) => {
    return { ...state, availableAssets: action.payload };
  })
  .handleAction(actions.deleteAsset, (state, action) => {
    let assetList = [];
    const initialAssets = cloneDeep(state.assetList);
    for (const asset of initialAssets) {
      if (asset.id !== action.payload) {
        assetList.push(cloneDeep(asset));
      }
    }

    LocalStorage.set("assetList", assetList);
    return { ...state, assetList };
  })
  .handleAction(actions.addAsset, (state, action) => {
    const asset = state.availableAssets.find(
      ({ symbol }) => symbol === action.payload.symbol
    );
    if (!asset) return state;

    const updatedAssets = cloneDeep(state.assetList);
    updatedAssets.push({
      ...asset,
      comment: action.payload.comment,
    });
    LocalStorage.set("assetList", updatedAssets);

    return { ...state, assetList: updatedAssets };
  })
  .handleAction(actions.fetchSingleAsset.success, (state, action) => {
    return { ...state, singleAsset: action.payload };
  });

export default app;
