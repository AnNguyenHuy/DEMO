import React, { useState } from "react";

export function CounterFuncCom() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Function Component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
