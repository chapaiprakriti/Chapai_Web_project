// src/pages/Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 p-4">
      <div className="w-full max-w-sm bg-white/50 backdrop-blur-md rounded-3xl p-8 shadow-xl flex flex-col items-center space-y-6 text-black">

        {/* Avatar Icon Placeholder */}
        <div className="w-24 h-24 bg-white/70 rounded-full flex items-center justify-center -mt-16 mb-4 shadow-lg">
          <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold mb-4 drop-shadow-sm">SIGN UP</h1>

        {/* Username Input */}
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-5 py-3 pl-12 rounded-full shadow-inner bg-white/70 border border-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-pink-500 placeholder-gray-500 text-gray-800"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        {/* Email Input */}
        <div className="w-full relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 pl-12 rounded-full shadow-inner bg-white/70 border border-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-pink-500 placeholder-gray-500 text-gray-800"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>

        {/* Password Input */}
        <div className="w-full relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 pl-12 rounded-full shadow-inner bg-white/70 border border-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-pink-500 placeholder-gray-500 text-gray-800"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
          </svg>
        </div>

        {/* Confirm Password Input */}
        <div className="w-full relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-5 py-3 pl-12 rounded-full shadow-inner bg-white/70 border border-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-pink-500 placeholder-gray-500 text-gray-800"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
          </svg>
        </div>

        {/* Signup Button */}
        <button className="w-full py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition duration-300 backdrop-blur-sm mt-4">
          SIGN UP
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-700 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-pink-600 hover:underline font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;