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
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Pokemon</h1>
      <img alt="pokemon" src={pokemon.sprites?.front_default} width="150px" />
    </div>
  );
};

export default Pokemon;
