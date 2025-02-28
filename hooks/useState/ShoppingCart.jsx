import React, { useState } from "react";

function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0);
  };

  return (
    <div>
      <h2>🛒 Items in Cart: {cartCount}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
}

export default ShoppingCart;
