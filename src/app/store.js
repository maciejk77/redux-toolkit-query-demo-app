import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import { pokemonApi } from "../services/pokemonApi";
import { catApi } from "../services/catApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [catApi.reducerPath]: catApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, catApi.middleware),
});
