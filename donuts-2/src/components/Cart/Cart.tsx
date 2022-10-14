import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice, totalCalories } =
    useContext(CartContext);
  return (
    <div className="Cart">
      <div className="cart-table">
        <div className="header">
          <div className="col">S.NO</div>
          <div className="col">Name</div>
          <div className="col">Calorie</div>
          <div className="col">Quantity</div>
          <div className="col">Price</div>
          <div className="col">Action</div>
        </div>
        {cartItems.map((item, index) => (
          <div className="row" key={item.id}>
            <div className="col">{index + 1}</div>
            <div className="col">{item.name}</div>
            <div className="col">{item.calories}</div>
            <div className="col">{item.count}</div>
            <div className="col">{`$${item.price}.00`}</div>
            <div className="col">
              <button
                className="delete"
                onClick={() => removeFromCart(item.id)}
              >
                <i className="material-icons">cancel</i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-price">
        <span>Total Calories : {totalCalories()}</span>
        <span>Total Price : {`$${totalPrice()}.00`}</span>
      </div>
    </div>
  );
};

export default Cart;
