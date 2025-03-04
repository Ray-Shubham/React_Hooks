import React, { useState, useMemo } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Tablet" },
  { id: 4, name: "Smartwatch" },
  { id: 5, name: "Headphones" },
];

function ProductSearch() {
  const [search, setSearch] = useState("");

  // Memoize Filtered Products
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Product Search</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
