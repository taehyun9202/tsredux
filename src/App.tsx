import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon, getPokemon } from "./store/actions/pokemonAction";
import { RootStore } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state: RootStore) => state.pokemon);
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(e.target.value);

  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName));
  };

  // useEffect(() => {
  //   if (!pokemon.loading) {
  //     console.log("list not fetched");
  //     dispatch(getAllPokemon());
  //   }
  // }, [pokemon.loading ==, dispatch]);

  return (
    <div>
      <div>
        <li>Pokemon redux</li>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {pokemon.pokemon && (
          <>
            <p>{pokemon.pokemon?.name}</p>
            <img src={pokemon.pokemon.sprites.front_default} alt="pokemon" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
