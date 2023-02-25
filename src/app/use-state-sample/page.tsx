"use client";

import { useState } from "react";

export default function UseStateSamplePage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useState Sample Page</h1>
      <h2>Counter = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
