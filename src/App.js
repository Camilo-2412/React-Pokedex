import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import { getPokemonData, getPokemons } from "./api";

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(21, 21 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 21));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <NavBar />
      <div className="App">
        <SearchBar />
       
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
            state = {state}
            setState= {setState}
          />
       
      </div>
    </div>
  );
}

export default App;
