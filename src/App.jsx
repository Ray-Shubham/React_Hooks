import React from 'react'
import Counter from '../hooks/useState/Counter'
import ShoppingCart from '../hooks/useState/ShoppingCart'

const App = () => {
  return (
    <div>
      <Counter />
      <ShoppingCart />
    </div>
  )
}

export default App