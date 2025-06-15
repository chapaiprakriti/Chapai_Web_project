import React from "react";

const products = [
  {
    name: "UltraBook X200",
    price: "$1,099",
    image: "https://via.placeholder.com/250x160?text=Laptop",
  },
  {
    name: "PixelEdge Pro",
    price: "$799",
    image: "https://via.placeholder.com/250x160?text=Smartphone",
  },
  {
    name: "SoundMax Wireless",
    price: "$199",
    image: "https://via.placeholder.com/250x160?text=Headphones",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ElectroMart</h1>
          <nav>
            <ul className="flex space-x-6 font-semibold">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">Products</a></li>
              <li><a href="#" className="hover:text-orange-500">Deals</a></li>
              <li><a href="#" className="hover:text-orange-500">Support</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-center items-center h-[300px]">
        <div className="bg-gray-700 text-white text-center px-6 py-10 rounded-md">
          <h2 className="text-3xl font-bold mb-2">Smart Tech, Smarter Living</h2>
          <p className="mb-4">Explore our latest electronics and gadgets for your digital lifestyle.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="mx-auto mb-4 rounded-md" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-8">
        <p>&copy; 2025 ElectroMart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
