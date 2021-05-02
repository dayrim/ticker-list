declare module "Models" {
  export type AppState = {
    assetList: Array<Asset>;
    availableAssets: Array<Asset>;
    singleAsset?: SingleAsset;
  };

  export type Asset = {
    id: string;
    symbol: string;
    name: string;
    currency: string;
    price: number;
    comment?: string;
  };

  export type SingleAsset = {
    symbol: string;
    orders: Order[];
    offers: Offer[];
  };

  export interface Order {
    id: string;
    px: number;
    qty: number;
    num: number;
  }
  export interface Offer {
    id: string;
    px: number;
    qty: number;
    num: number;
  }
}
