import React from "react";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const onChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const onClick = (event) =>{

  }

  return (
    <div>
      <div>
        <input placeholder="Find Pokemon..." onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
