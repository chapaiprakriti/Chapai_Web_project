import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-gray-100">
      <Header />

      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-orange-500">ElectroMart</span>
        </h1>
        <p className="max-w-3xl text-xl md:text-2xl mb-12 text-gray-300">
          Discover the best electronics, exclusive deals, and powerful tools for both buyers and sellers.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => navigate('/product')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition"
          >
            Browse Products
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg shadow-md transition"
          >
            Join Now
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
