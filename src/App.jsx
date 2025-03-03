import React from "react";
// import Counter from '../hooks/useState/Counter'
// import ShoppingCart from '../hooks/useState/ShoppingCart'
import FetchData from "../hooks/useEffect/FetchData";
import Counter from "../hooks/useEffect/Counter";
import ChangeBg from "../hooks/useLayoutEffect/ChangeBg";
import IndianGov from "../hooks/useContext/PropsDrilling/IndianGov";

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
      {/* <ChangeBg /> */}

      {/* PropsDrilling */}
      <IndianGov />
    </div>
  );
};

export default App;
