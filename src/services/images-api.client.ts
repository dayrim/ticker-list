import { ImageAPI } from "Models";
import axios from "axios";

export const searchImages = async (
  params: ImageAPI.SearchImagesParams = {
    query: "nature",
    per_page: 5,
    page: 1,
    orientation: "portrait",
  }
): Promise<ImageAPI.SearchImages> => {
  const { data } = await axios.request<ImageAPI.SearchImages>({
    method: "get",
    url: "https://api.unsplash.com/search/photos",
    params,
    headers: {
      Authorization: `Client-ID ${"cKakzKM1cx44BUYBnEIrrgN_gnGqt81UcE7GstJEils"}`,
    },
  });
  return data;
};

export const getRandomPhotos = async (
  params: ImageAPI.GetRandomPhotos = {
    query: "nature",
    count: 5,
    orientation: "portrait",
  }
): Promise<ImageAPI.ResultsEntity[] | null> => {
  const { data } = await axios.request<ImageAPI.ResultsEntity[] | null>({
    method: "get",
    url: "https://api.unsplash.com/photos/random",
    params,
    headers: {
      Authorization: `Client-ID ${"cKakzKM1cx44BUYBnEIrrgN_gnGqt81UcE7GstJEils"}`,
    },
  });
  return data;
};
