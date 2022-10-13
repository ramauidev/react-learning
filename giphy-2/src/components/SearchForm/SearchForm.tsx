import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/?${new URLSearchParams({ term: searchTerm })}`);
  };

  return (
    <form className="SearchForm" onSubmit={(e) => submit(e)}>
      <label htmlFor="searchTerm">Search Term</label>
      <input
        type="text"
        id="searchTerm"
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
