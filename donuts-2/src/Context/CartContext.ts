import { createContext } from "react";
import CartItem from "../models/CartItem";
import DonutResponse from "../models/DonutResponse";

interface CartContextModel {
  cartItems: CartItem[];
  addToCart: (donut: DonutResponse) => void;
  removeFromCart: (id: number) => void;
  isCartItem: (id: number) => boolean;
  totalCalories: () => number;
  totalPrice: () => number;
}

const defaultValues: CartContextModel = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isCartItem: () => false,
  totalCalories: () => 0,
  totalPrice: () => 0,
};

const CartContext = createContext(defaultValues);

export default CartContext;
