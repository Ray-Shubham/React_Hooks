import React, { useState } from "react";
import Context from "./context";

const MoneyState = (props) => {
  const money = 1000;
  const [counter, setCounter] = useState(0);
  const person = {
    name: "ray",
    age: 25,
    mail: "ray555@gmail.com",
  };
  return (
    <Context.Provider value={{ money, counter, setCounter, person }}>
      {props.children}
    </Context.Provider>
  );
};

export default MoneyState;
