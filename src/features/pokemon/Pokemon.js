import React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemonApi";
// import { selectPokemon } from "../pokemon/pokemonSlice";
import { useSelector } from "react-redux";

const Pokemon = () => {
  const activePokemon = useSelector((state) => state.pokemon.value);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(activePokemon);

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Pokemon</h1>
      {activePokemon ? (
        <img alt="pokemon" src={pokemon.sprites?.front_default} width="150px" />
      ) : (
        <div>Select from the list</div>
      )}
    </div>
  );
};

export default Pokemon;
