import { ADD_NOTE } from "../types";
interface pokemonState {
  // notes: string[];
}

const initialState = {
  // notes: [],
};

export const pokemonReducer = (
  state: pokemonState = initialState,
  action: any
) => {
  switch (action.type) {
    // case ADD_NOTE: {
    //   return { ...state, notes: [...state., action.payload] };
    // }
    default:
      return state;
  }
};
