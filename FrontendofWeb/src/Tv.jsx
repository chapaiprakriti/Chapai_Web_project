import React from "react";

const SmartTVDetail = () => {
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
                src="https://via.placeholder.com/400x400?text=4K+Smart+TV+55%22"
                alt="4K Smart TV 55"
                className="w-full rounded-lg object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex-2">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">4K Smart TV 55"</h2>
              <p className="text-base leading-7 mb-6">
                Experience stunning visuals with the 4K Smart TV 55". Equipped with HDR10+, Dolby Vision support, and a powerful quad-core processor, enjoy smooth streaming and crisp picture quality. Smart TV features include built-in apps, voice control, and multiple connectivity options.
              </p>

              <p className="font-semibold mb-2">Specifications:</p>
              <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
                <li>Display: 55" UHD 4K LED</li>
                <li>Resolution: 3840 x 2160 pixels</li>
                <li>HDR Support: HDR10+ and Dolby Vision</li>
                <li>Processor: Quad-core CPU</li>
                <li>Smart Features: Built-in Netflix, YouTube, Amazon Prime apps</li>
                <li>Voice Control: Google Assistant & Alexa compatible</li>
                <li>Connectivity: 3x HDMI, 2x USB, Wi-Fi, Bluetooth 5.0</li>
                <li>Sound: Dolby Atmos with dual speakers</li>
                <li>Energy Rating: A+</li>
                <li>Weight: 18 kg</li>
              </ul>

              <div className="text-2xl font-bold text-blue-800 mb-4">$699</div>
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

export default SmartTVDetail;
