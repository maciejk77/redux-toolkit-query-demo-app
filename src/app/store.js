import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import { pokemonApi } from "../services/pokemonApi";
import { catApi } from "../services/catApi";

// Combined reducer exported as Redux Store
export const store = configureStore({
  reducer: {
    // Each reducer slice
    counter: counterReducer,
    pokemon: pokemonReducer,
    // Each reducer api service
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [catApi.reducerPath]: catApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

  // Each middleware added here for service APIs
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, catApi.middleware),
});
