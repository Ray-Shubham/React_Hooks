import React from 'react'

const Button = React.memo(({onClick}) => {
    console.log("Button Re-Rendered");
  return (
    <div>
        <button onClick={onClick}>Click Me</button>
    </div>
  )
});

export default Button