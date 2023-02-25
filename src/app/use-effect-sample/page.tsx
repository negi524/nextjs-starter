"use client";

import { useEffect, useState } from "react";

export default function UseEffectSamplePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("exec useEffect.");
  }, [count]);

  return (
    <>
      <h1>useEffect Sample Page</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
