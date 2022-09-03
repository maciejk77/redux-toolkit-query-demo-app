import React from "react";
import { useGetAllPokemonNamesQuery } from "../../services/pokemonApi";
import {
  // selectPokemon,
  setActivePokemon,
} from "../pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const dispatch = useDispatch();
  const activePokemon = useSelector((state) => state.pokemon.value);
  const { data: pokemons, error, isLoading } = useGetAllPokemonNamesQuery();

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setActivePokemon(value));
  };

  return (
    <>
      <h1>Select Pokemon</h1>
      <select onChange={handleChange}>
        {pokemons.results.map(({ name }) => (
          <option key={name} selected={activePokemon === name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

const styles = {};

export default Dropdown;
