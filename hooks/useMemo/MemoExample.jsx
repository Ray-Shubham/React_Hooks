import React, { useState, useMemo } from "react";

// Expensive Function
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

function MemoExample() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // Memoize Expensive Calculation
  const computedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>Computed Sum: {computedValue}</p>
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      
      <h3>Counter (Unrelated State Change)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default MemoExample;
