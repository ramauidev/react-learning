import { useEffect, useState } from "react";
import Gif from "../../models/Gif";
import {
  getGifsBySearchTerm,
  getTrendingGifs,
} from "../../services/GiphyService";
import ResultsList from "../ResultsList/ResultsList";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      getGifsBySearchTerm(searchTerm).then((response) =>
        setGifs(response.data)
      );
    } else {
      getTrendingGifs().then((response) => setGifs(response.data));
    }
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm onFormSubmit={setSearchTerm} />
      <ResultsList gifs={gifs} />
    </div>
  );
};

export default Main;
