import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>Giphy Project</h1>
      </Link>
      <Link to="/gifs/favorites">Favorites</Link>
    </header>
  );
};

export default Header;
