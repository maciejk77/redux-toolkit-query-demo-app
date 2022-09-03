import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setActivePokemon: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setActivePokemon } = pokemonSlice.actions;

export const selectPokemon = (state) => state?.pokemon.value;

export default pokemonSlice.reducer;
