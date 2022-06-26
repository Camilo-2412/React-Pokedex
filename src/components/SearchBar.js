import React from "react";
import { searchPokemon } from "../api";

const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onClick = async (event) => {
    const data = await searchPokemon(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Find Pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
