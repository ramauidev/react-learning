import axios from "axios";
import MulitpleGiphyResponse from "../models/MultipleGiphyResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingGifs = (): Promise<MulitpleGiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: key,
        limit: 5,
      },
    })
    .then((response) => response.data);
};

export const getGifsBySearchTerm = (
  term: string
): Promise<MulitpleGiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: key,
        q: term,
        limit: 5,
      },
    })
    .then((response) => response.data);
};

export const getGifById = (id: string): Promise<SingleGifResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => response.data);
};
