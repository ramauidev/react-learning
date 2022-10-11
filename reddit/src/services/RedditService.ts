import axios from "axios";
import { RedditResponse } from "../models/RedditResponse";

export const getRedditPosts = (
  searchTerm?: string
): Promise<RedditResponse> => {
  return axios
    .get(`https://www.reddit.com/r/${searchTerm ? searchTerm : "aww"}/.json`)
    .then((response) => {
      console.log("reddit data :: ", response.data);
      return response.data;
    });
};
