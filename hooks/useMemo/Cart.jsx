import React, { useMemo, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Shirt", price: 500 },
    { id: 3, name: "Pants", price: 800 },
  ]);
  const [discount, setDiscount] = useState(0);
  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <p key={item.id}>
          {item.name} - {item.price}
        </p>
      ))}
      <h1>Total Price: {totalPrice}</h1>
      <button
        onClick={() => {
          console.log("Discount Button Clicked");
          setDiscount(discount + 1);
        }}
      >
        Increase Discount
      </button>
    </div>
  );
};

export default Cart;
