import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
//1
export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //effect
    // Replace with your actual backend API endpoint
    //start
    axios.get('http://localhost:4321/api/products')
      .then(res => setProducts(res.data))
      .catch(err => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 px-4 py-12 flex justify-center">
      <div className="max-w-7xl w-full bg-gray-700 rounded-lg p-10 shadow-xl">
        <h2 className="text-4xl font-extrabold mb-8 text-white text-center">
          Browse <span className="text-orange-500">Products</span>
        </h2>
        //com
//log
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="text-gray-300 text-center col-span-full">No products available.</p>
          ) : (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        //div
      </div>
      //sum
    </div>
  );
}
