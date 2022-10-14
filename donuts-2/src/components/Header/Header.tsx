import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header className="Header">
      <Link to="/">
        <h1>My Donut Project</h1>
      </Link>
      <Link to="/donut/cart/">
        Cart <span className="cart-count">{`(${cartItems.length})`}</span>
      </Link>
    </header>
  );
};

export default Header;
