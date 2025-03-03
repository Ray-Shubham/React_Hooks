import React, { useLayoutEffect, useState } from "react";

const ChangeBg = () => {
  const [changeBg, setChangeBg] = useState("black");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = changeBg;
  }, [changeBg]);
  return (
    <div>
      <h1>Current Background Color is : {changeBg}</h1>
      <button onClick={() => setChangeBg("red")}>Red</button>
      <button onClick={() => setChangeBg("blue")}>Blue</button>
      <button onClick={() => setChangeBg("green")}>Green</button>
      <button onClick={() => setChangeBg("yellow")}>Yellow</button>
    </div>
  );
};

export default ChangeBg;
