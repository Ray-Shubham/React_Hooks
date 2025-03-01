import React from 'react'
import Counter from '../hooks/useState/Counter'
import ShoppingCart from '../hooks/useState/ShoppingCart'
import FetchData from '../hooks/useEffect/FetchData'

const App = () => {
  return (
    <div>
      {/* useState Hook */}
      {/* <Counter />
      <ShoppingCart /> */}


      {/* useEffect Hook */}
      <FetchData />
    </div>
  )
}

export default App