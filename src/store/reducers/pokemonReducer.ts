import { PokemonDispatchTypes, PokemonTypes } from "../actions/pokemonAction";
import { POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "../types";
interface pokemonState {
  loading: boolean;
  pokemon?: PokemonTypes;
}

const initialState = {
  loading: false,
};

export const pokemonReducer = (
  state: pokemonState = initialState,
  action: PokemonDispatchTypes
) => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
      };

    case POKEMON_LOADING:
      return {
        loading: true,
      };

    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};
