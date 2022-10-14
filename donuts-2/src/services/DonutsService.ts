import DonutsResponse from "../models/DonutsResponse";
import axios from "axios";
import Donut from "../models/DonutResponse";

export const getDonuts = (): Promise<DonutsResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((response) => response.data);
};

export const getDonutByid = (id: number): Promise<Donut> => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}.json`
    )
    .then((response) => response.data);
};
