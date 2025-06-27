import React from "react";

const SmartwatchDetail = () => {
  return (
    <div className="bg-blue-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-blue-400 shadow-md">
        <div className="max-w-screen-xl mx-auto text-center py-6">
          <h1 className="text-3xl font-bold text-white">ElectroMart</h1>
          <nav className="mt-3 space-x-6">
            <a href="#" className="text-blue-100 hover:underline">Home</a>
            <a href="#" className="text-blue-100 hover:underline">Products</a>
            <a href="#" className="text-blue-100 hover:underline">Contact</a>
            <a href="#" className="text-blue-100 hover:underline">Login</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="flex-1 min-w-[300px]">
              <img
                src="https://via.placeholder.com/400x400?text=Smartwatch+Fit"
                alt="Smartwatch Fit"
                className="w-full rounded-lg object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex-2">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Smartwatch Fit</h2>
              <p className="text-base leading-7 mb-6">
                The Smartwatch Fit offers a perfect blend of style and fitness tracking. Featuring a vibrant AMOLED display, heart rate and SpO2 monitoring, built-in GPS, and up to 7 days battery life, it's your ideal workout companion and everyday wearable.
              </p>

              <p className="font-semibold mb-2">Specifications:</p>
              <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
                <li>Display: 1.4" AMOLED Touchscreen</li>
                <li>Sensors: Heart Rate, SpO2, Accelerometer</li>
                <li>Connectivity: Bluetooth 5.0</li>
                <li>Battery Life: Up to 7 days</li>
                <li>Water Resistance: 5 ATM</li>
                <li>Compatibility: Android & iOS</li>
                <li>Weight: 35g</li>
              </ul>

              <div className="text-2xl font-bold text-blue-800 mb-4">$199</div>
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

export default SmartwatchDetail;
