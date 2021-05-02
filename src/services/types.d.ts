declare module "Models" {
  export type Services = typeof import("./index").default;

  namespace ExchangeAPI {
    export type TickersResponse = Array<Ticker>;

    export type Ticker = {
      symbol: string;
      price_24h: number;
      volume_24h: number;
      last_trade_price: number;
    };

    export type L2Request = {
      symbol: string;
    };

    export type L2Response = {
      symbol: string;
      bids: Bid[];
      asks: Ask[];
    };
    export interface Bid {
      px: number;
      qty: number;
      num: number;
    }
    export interface Ask {
      px: number;
      qty: number;
      num: number;
    }
  }
}
