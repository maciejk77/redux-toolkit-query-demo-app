import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, selectCount } from "./counterSlice";

const Counter = () => {
  // Use of react-redux hooks to access the state
  const count = useSelector(selectCount); // not selectCount?
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div style={styles.container}>
      <h1>Counter</h1>
      <div style={{ display: "flex" }}>
        <button
          aria-label="Decrement value"
          style={styles.button}
          onClick={handleDecrement}
        >
          -
        </button>
        <div style={styles.count}>{count}</div>
        <button
          aria-label="Increment value"
          style={styles.button}
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          aria-label="Reset value"
          style={styles.button}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { border: "1px solid grey", padding: 10, marginBottom: 5 },
  button: {
    backgroundColor: "white",
    border: "3px solid blue",
    color: "blue",
    fontSize: "20px",
    padding: "5px 10px",
    marginRight: "2px",
  },
  count: {
    color: "red",
    fontSize: "30px",
    margin: "0 10px",
  },
};

export default Counter;
