import React from "react";
// import Counter from '../hooks/useState/Counter'
// import ShoppingCart from '../hooks/useState/ShoppingCart'
// import FetchData from "../hooks/useEffect/FetchData";
// import Counter from "../hooks/useEffect/Counter";
// import ChangeBg from "../hooks/useLayoutEffect/ChangeBg";
// import IndianGov from "../hooks/useContext/PropsDrilling/IndianGov";
// import Reducer from "../hooks/useReducer/Reducer";
import Cart from "../hooks/useMemo/Cart";
import MemoExample from "../hooks/useMemo/MemoExample";

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
      {/* <IndianGov /> */}

      {/* useReducer Hook */}
      {/* <Reducer /> */}

      {/* useMemo Hook */}
      <Cart />
      <MemoExample />
    </div>
  );
};

export default App;
