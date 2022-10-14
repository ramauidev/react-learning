import DonutResponse from "./DonutResponse";

export default interface CartItem extends DonutResponse {
  count: number;
  price: number;
}
