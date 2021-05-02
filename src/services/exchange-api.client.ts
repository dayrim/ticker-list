import { ExchangeAPI } from "Models";
import axios from "axios";

export const getTickers = async (): Promise<ExchangeAPI.TickersResponse> => {
  const { data } = await axios.request<ExchangeAPI.TickersResponse>({
    method: "get",
    url: "https://api.blockchain.com/v3/exchange/tickers",
  });
  return data;
};

export const getL2 = async ({
  symbol,
}: ExchangeAPI.L2Request): Promise<ExchangeAPI.L2Response> => {
  const { data } = await axios.request<ExchangeAPI.L2Response>({
    method: "get",
    url: `https://api.blockchain.com/v3/exchange/l2/${symbol}`,
  });
  return data;
};
