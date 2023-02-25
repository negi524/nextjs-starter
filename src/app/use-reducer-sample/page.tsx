"use client";
import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = "increment" | "decrement" | "reset";

const initialState: StateType = {
  count: 0,
} as const;

function reducer(state: StateType, action: ActionType) {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function UseReducerSamplePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer Sample Page</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch("increment")}>increment button</button>
      <br />
      <button onClick={() => dispatch("decrement")}>decrement button</button>
      <br />
      <button onClick={() => dispatch("reset")}>reset button</button>
    </>
  );
}
