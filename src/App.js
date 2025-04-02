import React, { useState } from "react";
import AgeCalculator from "./AgeCalculator";
import Result from "./Result";

const App = () => {
  const [age, setAge] = useState(null);

  return (
    <div>
      <h1>...Age Calculator...</h1>
      <AgeCalculator onCalculate={setAge} />
      <Result age={age} />
    </div>
  );
};

export default App;
