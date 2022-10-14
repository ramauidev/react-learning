import { ReactNode, useState } from "react";
import CartItem from "../models/CartItem";
import DonutResponse from "../models/DonutResponse";
import CartContext from "./CartContext";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (donut: DonutResponse) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === donut.id);
      let cartItem;
      if (index !== -1) {
        cartItem = {
          ...prev[index],
          count: prev[index].count + 1,
          price: prev[index].price + 1,
        };
        return [...prev.slice(0, index), cartItem, ...prev.slice(index + 1)];
      } else {
        cartItem = { ...donut, count: 1, price: 1 };
        return [...prev, cartItem];
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isCartItem = (id: number) => cartItems.some((item) => item.id === id);
  const totalPrice = () => cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalCalories = () =>
    cartItems.reduce((sum, item) => sum + item.calories!, 0);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartItem,
        totalPrice,
        totalCalories,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
