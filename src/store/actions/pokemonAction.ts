import { Dispatch } from "redux";
import axios from "axios";
import { POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS } from "../types";

export type PokemonName = {
  name: string;
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonTypes = {
  name: PokemonName;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL;
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonTypes;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;

export const getPoekmon =
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
