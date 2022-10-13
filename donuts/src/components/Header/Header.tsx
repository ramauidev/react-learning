import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>My Donut Project</h1>
      </Link>
    </header>
  );
};

export default Header;
