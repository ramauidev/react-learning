import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");

  useEffect(() => {
    if (term) {
      getGifsBySearchTerm(term).then((response) => setGifs(response.data));
    } else {
      getTrendingGifs().then((response) => setGifs(response.data));
    }
  }, [term]);

  return (
    <div className="Main">
      {/* <SearchForm onFormSubmit={setSearchTerm} /> */}
      <SearchForm />
      <ResultsList gifs={gifs} />
    </div>
  );
};

export default Main;
