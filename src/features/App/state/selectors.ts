import { RootState } from "Models";

export const getAssetList = (state: RootState) => state.App.assetList;
export const getSingleAsset = (state: RootState) => state.App.singleAsset;
export const getAvailableAssets = (state: RootState) => state.App.availableAssets;
