import React, { useContext } from "react";
import Context from "../context";

const People = () => {
  console.log("Printing the Context", useContext(Context));
  // const data = useContext(Context);
  const { money, counter, setCounter, person } = useContext(Context);
  return (
    <div>
      <h1>This is People Component = {money} </h1>
      <h1>Counter = {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
        Decrement
      </button>

      <h1>Name = {person.name}</h1>
      <h1>Age = {person.age}</h1>
      <h1>Mail = {person.mail}</h1>
    </div>
  );
};

export default People;
