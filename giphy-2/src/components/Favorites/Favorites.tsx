import { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import ResultsList from "../ResultsList/ResultsList";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <ResultsList gifs={favorites} />
    </div>
  );
};

export default Favorites;
