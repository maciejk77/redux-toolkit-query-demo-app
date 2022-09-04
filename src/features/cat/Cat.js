import React, { useState } from "react";
import { useGetCatQuery } from "../../services/catApi";

// Loads new Cat on each refresh

const Cat = () => {
  const [skip, setSkip] = useState(true);
  const {
    data: cats = [], // default state of data before fetching
    error,
    isLoading,
    refetch,
  } = useGetCatQuery(null, { skip });
  // skip:true enables to stop fetching on every component mount
  // when clicked => skip:false no longer blocks fetching (stops using cache)
  // and refetch makes sure that API is called again for "fresh data"

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>Error!</div>;

  const handleClick = () => {
    setSkip(false);
    refetch(); // if this wasn't here, subsequent clicks result in data from the cache
  };

  const renderCats = (
    <div style={{ marginTop: "5px" }}>
      {cats.map(({ id, url, height, width }) => (
        <div key={id}>
          <img src={url} alt="random cat" height={height} width={width} />
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <h1>Random Cat (CaS API)</h1>
      <button onClick={handleClick}>Meeeeow...</button>
      {renderCats}
    </div>
  );
};

const styles = {
  container: { border: "1px solid grey", padding: 10, marginBottom: 5 },
};

export default Cat;
