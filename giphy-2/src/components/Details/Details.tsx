import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import Gif from "../../models/Gif";
import { getGifById } from "../../services/GiphyService";
import Result from "../Result/Result";
import "./Details.css";

const Details = () => {
  const gifId = useParams().id;
  const [gif, setGif] = useState<Gif>();

  useEffect(() => {
    getGifById(gifId!).then((rsp) => {
      setGif(rsp.data);
    });
  }, [gifId]);

  return (
    <div className="Details">
      <Link to={`/`}>Back</Link>
      {gif ? <Result gif={gif} /> : <p>Loading...</p>}
    </div>
  );
};

export default Details;
