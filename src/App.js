import React from "react";
import Counter from "./features/counter/Counter";
import Cat from "./features/cat/Cat";
import Pokemon from "./features/pokemon/Pokemon";
import PokemonSelect from "./features/pokemonSelect/PokemonSelect";

const App = () => {
  return (
    <div>
      <Counter />
      <PokemonSelect />
      <Pokemon />
      <Cat />
    </div>
  );
};

export default App;
