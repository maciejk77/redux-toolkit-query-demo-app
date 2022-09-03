import React from "react";
import Counter from "./features/counter/Counter";
import Cat from "./features/cat/Cat";
import Pokemon from "./features/pokemon/Pokemon";
import Dropdown from "./features/dropdown/Dropdown";

const App = () => {
  return (
    <div>
      <Counter />
      <Dropdown />
      <Pokemon />
      <Cat />
    </div>
  );
};

export default App;
