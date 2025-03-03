import React from "react";
// import Counter from '../hooks/useState/Counter'
// import ShoppingCart from '../hooks/useState/ShoppingCart'
import FetchData from "../hooks/useEffect/FetchData";
import Counter from "../hooks/useEffect/Counter";
import ChangeBg from "../hooks/useLayoutEffect/ChangeBg";

const App = () => {
  return (
    <div>
      {/* useState Hook */}
      {/* <Counter />
      <ShoppingCart /> */}

      {/* useEffect Hook */}
      {/* <FetchData /> */}
      {/* <Counter /> */}

      {/* useLayoutEffect Hook */}
      <ChangeBg />
    </div>
  );
};

export default App;
