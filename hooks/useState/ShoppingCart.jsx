import React, { useState } from "react";

function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <h2>🛒 Items in Cart: {cartCount}</h2>
      <button onClick={() => setCartCount(cartCount + 1)}>Add to Cart</button>
      <button onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}>
        Remove from Cart
      </button>
    </div>
  );
}

export default ShoppingCart;
