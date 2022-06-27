import React from "react";
import Pokemon from "../components/Pokemon";
import Pagination from "../components/Pagination";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading, state, setState } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  const openModal = () => {
    setState(!state)
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeft={lastPage}
          onRigth={nextPage}
        />
      </div>

      {loading ? (
        <div>Loading pokemons ....</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return (
              <Pokemon
                pokemon={pokemon}
                state={state}
                setState={setState}
                key={pokemon.name}
                modal = {openModal}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
