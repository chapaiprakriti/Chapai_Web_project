import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-md transition p-4">
      <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover rounded" />

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm truncate">{product.description}</p>
        <div className="mt-2 text-blue-600 font-bold">${product.price}</div>
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
}
