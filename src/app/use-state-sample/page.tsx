"use client";

import { useState } from "react";

export default function CounterSamplePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Sample Page</h1>
      <h2>Counter = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
