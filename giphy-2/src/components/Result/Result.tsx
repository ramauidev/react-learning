import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Gif from "../../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
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
    </li>
  );
};

export default Result;
