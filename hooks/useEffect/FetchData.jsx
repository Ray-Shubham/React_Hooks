import React, { useEffect } from 'react'
import { useState } from 'react';

const FetchData = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("UseEffect Running....");
    }, [])
    
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>Decrement</button>
    </div>
  )
}

export default FetchData