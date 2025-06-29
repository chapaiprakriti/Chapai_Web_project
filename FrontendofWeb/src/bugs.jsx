import React from 'react';

const ProductDetail = () => {
  return (
    <div className="bg-blue-100 min-h-screen text-gray-900">
      <header className="bg-blue-400 shadow-md">
        <div className="container mx-auto px-4 py-5 text-center">
          <h1 className="text-white text-3xl font-bold mb-2">ElectroMart</h1>
          <nav>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Home</a>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Products</a>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Contact</a>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Login</a>
          </nav>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/400x400?text=Wireless+Earbuds+Z5"
                alt="Wireless Earbuds Z5"
                className="w-full rounded-lg object-contain"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Wireless Earbuds Z5</h2>
              <p className="mb-5 text-base leading-relaxed">
                The Wireless Earbuds Z5 deliver crystal-clear sound and active noise cancellation in a compact design.
                With ergonomic fit, touch controls, and up to 6 hours playback on a single charge plus a portable
                charging case, these earbuds are perfect for music lovers and on-the-go users.
              </p>

              <p className="font-semibold mb-2">Specifications:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>Type: True Wireless Stereo (TWS)</li>
                <li>Battery Life: 6 hours playback + 18 hours with charging case</li>
                <li>Noise Cancellation: Active Noise Cancelling (ANC)</li>
                <li>Connectivity: Bluetooth 5.2</li>
                <li>Water Resistance: IPX5 Sweat & Water Resistant</li>
                <li>Controls: Touch-sensitive controls for calls and music</li>
                <li>Compatibility: Android & iOS</li>
                <li>Weight: 50g (with case)</li>
              </ul>

              <div className="text-2xl font-bold text-blue-800 mb-4">$129</div>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-400 text-center text-white py-4 mt-10">
        &copy; 2025 ElectroMart. All rights reserved.
      </footer>
    </div>
  );
};

export default ProductDetail;
