import React from "react";

const ProductDetail = () => {
  return (
    <div className="bg-blue-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-blue-400 shadow-md">
        <div className="container mx-auto text-center py-6">
          <h1 className="text-3xl font-bold text-white">ElectroMart</h1>
          <nav className="mt-3 space-x-6">
            <a href="#" className="text-blue-100 hover:underline">
              Home
            </a>
            <a href="#" className="text-blue-100 hover:underline">
              Products
            </a>
            <a href="#" className="text-blue-100 hover:underline">
              Contact
            </a>
            <a href="#" className="text-blue-100 hover:underline">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="flex-1 min-w-[300px]">
              <img
                src="https://via.placeholder.com/500"
                alt="Smartphone X100"
                className="w-full rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex-2">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Smartphone X100
              </h2>
              <p className="text-base leading-7 mb-6">
                The Smartphone X100 features a sleek design with a powerful 5G
                processor, 128GB of storage, and a high-resolution triple-lens
                camera system. Enjoy stunning visuals on a 6.5&quot; OLED
                display and fast charging technology for your daily use.
              </p>

              <p className="font-semibold mb-2">Specifications:</p>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Display: 6.5" Full HD+ OLED</li>
                <li>Processor: Octa-core 5G</li>
                <li>Storage: 128GB</li>
                <li>Camera: 64MP + Ultra Wide + Macro</li>
                <li>Battery: 4500mAh, Fast Charging</li>
              </ul>

              <div className="text-2xl font-bold text-blue-800 mb-4">
                $499
              </div>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-400 text-center text-white py-4 mt-12">
        <p>&copy; 2025 ElectroMart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetail;
