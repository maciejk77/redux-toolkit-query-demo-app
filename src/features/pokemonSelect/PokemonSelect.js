import React from "react";
import { useGetAllPokemonNamesQuery } from "../../services/pokemonApi";
import {
  // selectPokemon, not working why??
  setActivePokemon,
} from "../pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

const PokemonSelect = () => {
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
    <div style={styles.container}>
      <h1>Select Pokemon</h1>
      <select onChange={handleChange}>
        {!activePokemon && <option> - not selected - </option>}
        {pokemons.results.map(({ name }) => (
          <option key={name} selected={activePokemon === name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  container: { border: "1px solid grey", padding: 10, marginBottom: 5 },
};

export default PokemonSelect;
