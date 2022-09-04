import React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemonApi";
// import { selectPokemon } from "../pokemon/pokemonSlice";
import { useSelector } from "react-redux";

const Pokemon = () => {
  const activePokemon = useSelector((state) => state.pokemon.value);
  // Accessing different piece of state e.g. counter here
  const count = useSelector((state) => state.counter.value);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(activePokemon);

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div style={styles.container}>
      <div>Example of different part of state shared here</div>
      <div style={{ color: "red" }}>COUNT: {count}</div>
      <h1>Pokemon</h1>

      {activePokemon ? (
        <img alt="pokemon" src={pokemon.sprites?.front_default} width="150px" />
      ) : (
        <div>Select from the list ABOVE!</div>
      )}
    </div>
  );
};

const styles = {
  container: { border: "1px solid grey", padding: 10, marginBottom: 5 },
};

export default Pokemon;
