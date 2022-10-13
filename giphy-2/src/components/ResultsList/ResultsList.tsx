import Gif from "../../models/Gif";
import Result from "../Result/Result";
import "./ResultsList.css";

interface Props {
  gifs: Gif[];
}

const ResultsList = ({ gifs }: Props) => {
  return (
    <div className="ResultsList">
      <ul>
        {gifs.map((gif) => (
          <Result key={gif.id} gif={gif} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
