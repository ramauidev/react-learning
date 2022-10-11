import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: key,
        limit: 5,
      },
    })
    .then((response) => response.data);
};

export const getGifsBySearchTerm = (term: string): Promise<GiphyResponse> => {
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
