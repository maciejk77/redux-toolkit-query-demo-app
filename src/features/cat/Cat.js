import React from "react";
import { useGetCatQuery } from "../../services/catApi";

const Cat = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data: cats, error, isLoading } = useGetCatQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <h1>Random Cat (CaS API)</h1>
      <div>
        {cats.map(({ id, url, height, width }) => (
          <div key={id}>
            <img src={url} alt="random cat" height={height} width={width} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cat;
