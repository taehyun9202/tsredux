import { Dispatch } from "redux";
import axios from "axios";
import {
  ALL_POKEMON_LOADING,
  ALL_POKEMON_FAIL,
  ALL_POKEMON_SUCCESS,
  POKEMON_LOADING,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from "../types";

type PokemonName = {
  name: string;
};

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type PokemonURL = {
  url: string;
};

export type PokemonList = {
  name: PokemonName;
  url: PokemonURL;
};

export type PokemonTypes = {
  name: PokemonName;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

// pokemon list
interface AllPokemonLoading {
  type: typeof ALL_POKEMON_LOADING;
}

interface AllPokemonFail {
  type: typeof ALL_POKEMON_FAIL;
}

interface AllPokemonSuccess {
  type: typeof ALL_POKEMON_SUCCESS;
  payload: PokemonTypes;
}

// single pokemon
interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}

interface PokemonFail {
  type: typeof POKEMON_FAIL;
}

interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonTypes;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess
  | AllPokemonLoading
  | AllPokemonFail
  | AllPokemonSuccess;

export const getAllPokemon =
  () => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: ALL_POKEMON_LOADING,
        payload: null,
      });

      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      dispatch({
        type: ALL_POKEMON_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: ALL_POKEMON_FAIL,
      });
      console.log(e);
    }
  };

export const getPokemon =
  (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: POKEMON_LOADING,
        payload: null,
      });

      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      dispatch({
        type: POKEMON_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POKEMON_FAIL,
      });
      console.log(e);
    }
  };
