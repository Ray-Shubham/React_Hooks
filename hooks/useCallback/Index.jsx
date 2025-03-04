import React, { useCallback, useState } from "react";
import Button from "./Button";

const Index = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Function gets recreated on every render
  // const handleClick = () => setCount(count + 1);

  // Memoizing handleClick function using useCallback hook
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1>Count : {count}</h1>
      {/* Rendering Button component */}
      <Button onClick={handleClick} />
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
};

export default Index;
