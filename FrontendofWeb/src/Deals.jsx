import React from 'react';
import bluetoothspeakerImage from './assets/bluetoothspeaker.png';
import headphoneImage from './assets/headphone.png';
import smarttableImage from './assets/smarttable.png';

const HotDeals = () => {
  const deals = [
    {
      title: "Wireless Headphones",
      description: "Crystal-clear sound with 30h battery life.",
      image: headphoneImage, // Using the imported image
      originalPrice: "$99",
      dealPrice: "$69",
    },
    {
      title: "10\" Smart Tablet",
      description: "Perfect for reading, Browse, and gaming.",
      image: smarttableImage, // Using the imported image
      originalPrice: "$199",
      dealPrice: "$149",
    },
    {
      title: "Bluetooth Speaker",
      description: "Waterproof & loud stereo sound.",
      image: bluetoothspeakerImage, // Using the imported image
      originalPrice: "$59",
      dealPrice: "$39",
    },
  ];

  return (
    <div className="bg-blue-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-blue-400 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <h1 className="text-white text-3xl font-bold mb-2">ElectroMart</h1>
          <nav>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Home</a>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Products</a>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Deals</a>
            <a href="#" className="text-blue-50 mx-3 hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-6">
          🔥 Hot Deals of the Week!
        </h2>
        <div className="bg-blue-900 text-white text-center text-lg rounded-lg py-3 mb-10">
          Limited Time Offers – Hurry Before They're Gone!
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-600 rounded-xl p-5 w-[280px] shadow-lg text-center transform transition hover:-translate-y-1"
            >
              <img
                src={deal.image} // Now using the imported image variable
                alt={deal.title}
                className="w-full rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{deal.title}</h3>
              <p className="text-sm mb-2">{deal.description}</p>
              <p className="line-through text-gray-500 text-sm">{deal.originalPrice}</p>
              <p className="text-xl text-blue-900 font-bold mb-4">{deal.dealPrice}</p>
              <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-400 text-center text-white py-4 mt-10">
        &copy; 2025 ElectroMart. All rights reserved.
      </footer>
    </div>
  );
};

export default HotDeals;