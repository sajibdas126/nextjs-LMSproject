'use client'; // mandatory for client-side fetching in Next.js 13+

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [products, setProducts] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch('/data/courses.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
