// src/homepage.jsx
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "UltraBook X200",
    price: "$1,099",
    image: "https://via.placeholder.com/400x280?text=Laptop",
  },
  {
    name: "PixelEdge Pro",
    price: "$799",
    image: "https://via.placeholder.com/400x280?text=Smartphone",
  },
  {
    name: "SoundMax Wireless",
    price: "$199",
    image: "https://via.placeholder.com/400x280?text=Headphones",
  },
];

function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white w-full">
        <div className="flex justify-between items-center px-8 py-5 max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold">ElectroMart</h1>

          <nav className="flex items-center space-x-8">
            <ul className="flex space-x-8 font-semibold text-lg">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <Link to="/product" className="hover:text-orange-500">Products</Link>
              <li><a href="#" className="hover:text-orange-500">Deals</a></li>
              <li><a href="#" className="hover:text-orange-500">Support</a></li>
            </ul>

            <div className="space-x-4 ml-8">
              <Link
                to="/login"
                className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition text-lg font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded transition text-lg font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-center items-center h-[400px] bg-gray-800 px-8">
        <div className="bg-gray-700 text-white text-center px-8 py-14 rounded-md max-w-5xl w-full">
          <h2 className="text-4xl font-bold mb-4">Smart Tech, Smarter Living</h2>
          <p className="mb-6 text-lg">Explore our latest electronics and gadgets for your digital lifestyle.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold text-xl">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="text-center py-14 px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Featured Products</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition cursor-pointer"
              style={{ minHeight: "400px", minWidth: "320px" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto mb-6 rounded-lg w-full h-[220px] object-contain"
              />
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 font-semibold text-xl">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-12 w-full">
        <p className="text-lg">&copy; 2025 ElectroMart. All rights reserved.</p>
      </footer>
    </>
  );
}            

export default Home; 

