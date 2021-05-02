import { createAsyncAction, createAction } from "typesafe-actions";
import { Asset, SingleAsset } from "Models";

export const fetchAvailableAssets = createAsyncAction(
  "@app fetchAvailableAssets Request",
  "@app fetchAvailableAssets Success",
  "@app fetchAvailableAssets Failure"
)<void, Array<Asset>, Error>();

export const fetchSingleAsset = createAsyncAction(
  "@app fetchSingleAsset Request",
  "@app fetchSingleAsset Success",
  "@app fetchSingleAsset Failure"
)<string, SingleAsset, Error>();

export const initAssetList = createAction("@app initAssetList")();

export const deleteAsset = createAction(
  "@app deleteAsset",
  (id: string) => id
)<string>();

export const addAsset = createAction(
  "@app addAsset",
  ({ symbol, comment }: { symbol: string; comment?: string }) => ({
    symbol,
    comment,
  })
)<{ symbol: string; comment: string }>();
