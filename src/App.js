import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import { getPokemonData, getPokemons } from "./api";

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
