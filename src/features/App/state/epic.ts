import { catchError, mergeMap, map, filter, mapTo } from "rxjs/operators";
import { throwError, from, of, timer } from "rxjs";
import { RootEpic } from "Models";
import { isActionOf } from "typesafe-actions";
import cuid from "cuid";

import * as actions from "./actions";

export const initAssetList: RootEpic = () => of(actions.initAssetList());
export const updateAvailableAssets: RootEpic = () =>
  timer(0, 300000).pipe(mapTo(actions.fetchAvailableAssets.request()));

export const fetchAvailableAssets: RootEpic = (
  action$,
  state$,
  { ExchangeAPI }
) =>
  action$.pipe(
    filter(isActionOf(actions.fetchAvailableAssets.request)),
    mergeMap(() => from(ExchangeAPI.getTickers())),
    map((data) => {
      if (!data) return [];

      let assetList = [];

      for (const { last_trade_price, symbol } of data) {
        const name = symbol.split("-")[0];
        const currency = symbol.split("-")[1];
        if (currency === "USD") {
          assetList.push({
            id: cuid(),
            symbol,
            name,
            currency,
            price: last_trade_price,
          });
        }
      }

      return assetList;
    }),
    catchError((error) => throwError(error)),
    map((data) => actions.fetchAvailableAssets.success(data)),
    catchError((error: Error) =>
      of(actions.fetchAvailableAssets.failure(error))
    )
  );

export const getSingleAsset: RootEpic = (action$, state$, { ExchangeAPI }) =>
  action$.pipe(
    filter(isActionOf(actions.fetchSingleAsset.request)),
    mergeMap(({ payload: symbol }) => from(ExchangeAPI.getL2({ symbol }))),
    map(({ bids, asks, symbol }) => {
      const singleAsset = {
        symbol,
        orders: bids.map((bid) => ({ ...bid, id: cuid() })),
        offers: asks.map((ask) => ({ ...ask, id: cuid() })),
      };

      return singleAsset;
    }),
    catchError((error) => throwError(error)),
    map((data) => actions.fetchSingleAsset.success(data)),
    catchError((error: Error) => of(actions.fetchSingleAsset.failure(error)))
  );
