import React from "react";
import { useGetCatQuery } from "../../services/catApi";

const Cat = () => {
  const { data: cats, error, isLoading } = useGetCatQuery();

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  // Add Load/Refresh button when clicked cat image should appear

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
