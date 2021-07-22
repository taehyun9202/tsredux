import {
  PokemonDispatchTypes,
  PokemonList,
  PokemonTypes,
} from "../actions/pokemonAction";
import {
  ALL_POKEMON_FAIL,
  ALL_POKEMON_LOADING,
  ALL_POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "../types";

interface pokemonState {
  loading: boolean;
  pokemonList: PokemonList;
  pokemon: PokemonTypes;
}

const initialState = {
  loading: false,
} as pokemonState;

export const pokemonReducer = (
  state: pokemonState = initialState,
  action: PokemonDispatchTypes
) => {
  switch (action.type) {
    case ALL_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
      };

    case ALL_POKEMON_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ALL_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonList: action.payload,
      };
    case POKEMON_FAIL:
      return {
        ...state,
        loading: false,
      };

    case POKEMON_LOADING:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};
