import { useState } from "react";
import InputSample from "./component/Input";
import Problem from "./component/Problem";
import Calculator from "./component/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        button
      </button>
      <InputSample />
      <Problem />

      <Calculator />
    </>
  );
}

export default App;
