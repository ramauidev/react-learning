import Gif from "../../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <h2>{gif.title}</h2>
      <img src={gif.images.original.url} alt={gif.title} />
      <a href={gif.url}>Link to original</a>
    </li>
  );
};

export default Result;
