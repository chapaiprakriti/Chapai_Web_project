// src/App.jsx
import React from "react";
import "./index.css"; // Tailwind CSS imported here

const productList = [
  {
    image: "https://via.placeholder.com/200",
    title: "Smartphone X100",
    description: "High-performance 5G smartphone with 128GB storage.",
    price: 499,
  },
  {
    image: "https://via.placeholder.com/200",
    title: "Laptop Pro 15",
    description: "Powerful laptop with Intel i7 and 16GB RAM.",
    price: 899,
  },
  {
    image: "https://via.placeholder.com/200",
    title: "Smartwatch Fit",
    description: "Track your health and fitness with modern design.",
    price: 199,
  },
  {
    image: "https://via.placeholder.com/200",
    title: "Wireless Earbuds Z5",
    description: "Compact true wireless earbuds with noise cancellation.",
    price: 129,
  },
  {
    image: "https://via.placeholder.com/200",
    title: '4K Smart TV 55"',
    description: "Immersive 55-inch 4K UHD smart TV with HDR support.",
    price: 799,
  },
];

const Header = () => (
  <header className="bg-black text-white w-full">
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
      <h1 className="text-2xl font-bold">ElectroMart</h1>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6 font-semibold">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Products</a></li>
          <li><a href="#" className="hover:text-orange-500">Deals</a></li> {/* Deals before Contact */}
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-black text-white text-center py-4 mt-10 w-full">
    <p>&copy; 2025 ElectroMart. All rights reserved.</p>
  </footer>
);

const ProductCard = ({ image, title, description, price }) => (
  <div className="bg-white rounded-lg p-6 w-72 shadow-md text-center hover:shadow-lg transition cursor-pointer">
    <img src={image} alt={title} className="w-full h-auto rounded-md" />
    <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
    <p className="text-gray-700 my-2">{description}</p>
    <span className="block font-semibold text-orange-500 mb-4">${price}</span>
    <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition font-semibold">
      Add to Cart
    </button>
  </div>
);

const ProductsPage = () => (
  <main className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-screen-xl mx-auto px-6">
      <h2 className="text-center text-gray-900 text-3xl font-bold mb-10">Latest Electronic Products</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {productList.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  </main>
);

function App() {
  return (
    <>
      <Header />
      <ProductsPage />
      <Footer />
    </>
  );
}

export default App;
