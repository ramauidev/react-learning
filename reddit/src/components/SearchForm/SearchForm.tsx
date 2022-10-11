import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  submitForm: (searchTerm: string) => void;
}

const SearchForm = ({ submitForm }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    submitForm(searchTerm);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
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
