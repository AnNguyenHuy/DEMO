import React from "react";
import CounterClassCom from "./pages/class-component";

import { CounterFuncCom } from "./pages/function-component";

function App() {
  return (
    <div>
      <CounterFuncCom />
      <div>-----------------------------</div>
      <CounterClassCom />
    </div>
  );
}

export default App;
