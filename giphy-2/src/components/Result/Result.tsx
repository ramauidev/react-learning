import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesContext from "../../context/FavoritesContext";
import Gif from "../../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="Result">
      <h2>{gif.title}</h2>
      <Link to={`gifs/${encodeURIComponent(gif.id)}`}>
        <img src={gif.images.original.url} alt={gif.title} />
      </Link>

      <a className="links" href={gif.url}>
        Link to original
      </a>
      <NavLink className="links" to={`gifs/${encodeURIComponent(gif.id)}`}>
        Open Details
      </NavLink>
      {isFav(gif.id) ? (
        <button onClick={() => removeFavorite(gif.id)}>Remove Favorite</button>
      ) : (
        <button onClick={() => addFavorite(gif)}>Add Favorite</button>
      )}
    </li>
  );
};

export default Result;
