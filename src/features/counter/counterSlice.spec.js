import counterReducer, { increment, decrement, reset } from "./counterSlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle reset", () => {
    const actual = counterReducer(initialState, reset());
    expect(actual.value).toEqual(0);
  });
});
