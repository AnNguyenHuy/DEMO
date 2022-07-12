import React, { useEffect, useState } from "react";

export function DemoFunctionComponent() {
  const [state, setState] = useState("");
  // console.log(state);

  useEffect(() => {
    setState("BLACK");
    console.log("call useEffect");
    console.log("value of state:", state);
  }, [state]);
  const onClick = () => {
    setState("WHITE");
    console.log("change color");
  };
  return (
    <div>
      <button onClick={onClick}>CHANGE</button>
      <p>COLOR: {state}</p>
    </div>
  );
}
