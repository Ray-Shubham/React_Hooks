import React from 'react'
// import Counter from '../hooks/useState/Counter'
// import ShoppingCart from '../hooks/useState/ShoppingCart'
import FetchData from '../hooks/useEffect/FetchData'
import Counter from '../hooks/useEffect/Counter'

const App = () => {
  return (
    <div>
      {/* useState Hook */}
      {/* <Counter />
      <ShoppingCart /> */}


      {/* useEffect Hook */}
      <FetchData />
      {/* <Counter /> */}
    </div>
  )
}

export default App