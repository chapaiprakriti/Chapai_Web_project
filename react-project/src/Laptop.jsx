import React from "react";

const LaptopDetail = () => {
  return (
    <div className="bg-blue-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-blue-400 shadow-md">
        <div className="container mx-auto text-center py-6">
          <h1 className="text-3xl font-bold text-white">ElectroMart</h1>
          <nav className="mt-3 space-x-6">
            <a href="#" className="text-blue-100 hover:underline">Home</a>
            <a href="#" className="text-blue-100 hover:underline">Products</a>
            <a href="#" className="text-blue-100 hover:underline">Contact</a>
            <a href="#" className="text-blue-100 hover:underline">Login</a>
          </nav>
        </div>
      </header>

      {/* Main Product Section */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="flex-1 min-w-[300px]">
              <img
                src="https://via.placeholder.com/500x350?text=Laptop+Pro+15"
                alt="Laptop Pro 15"
                className="w-full rounded-lg object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex-2">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Laptop Pro 15</h2>
              <p className="text-base leading-7 mb-6">
                The Laptop Pro 15 delivers exceptional performance with a powerful Intel Core i7 12th Gen processor, 16GB DDR5 RAM, and a fast 1TB SSD. Its stunning 15.6&quot; Retina Display brings visuals to life, while the NVIDIA RTX 3050 graphics card is perfect for creative work and gaming.
              </p>

              <p className="font-semibold mb-2">Specifications:</p>
              <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
                <li>Processor: Intel Core i7 12th Gen</li>
                <li>RAM: 16GB DDR5</li>
                <li>Storage: 1TB SSD</li>
                <li>Display: 15.6" Retina Display</li>
                <li>Graphics: NVIDIA RTX 3050</li>
                <li>Battery Life: Up to 12 hours</li>
                <li>Weight: 1.6kg</li>
              </ul>

              <div className="text-2xl font-bold text-blue-800 mb-4">$1499</div>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
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

export default LaptopDetail;
