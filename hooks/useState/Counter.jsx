import React, { useState } from "react";

const Counter = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    // counter++;
    console.log("Increment", counter);
  };

  const decrement = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
    // counter--;
    console.log("Decrement", counter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
