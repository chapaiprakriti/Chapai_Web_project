// src/pages/Login.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-4">
      <div className="w-full max-w-sm bg-white/50 backdrop-blur-md rounded-3xl p-8 shadow-xl flex flex-col items-center space-y-6 text-black">

        {/* Avatar */}
        <div className="w-24 h-24 bg-white/70 rounded-full flex items-center justify-center -mt-16 mb-4 shadow-lg">
          <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold mb-4 drop-shadow-sm">LOGIN</h1>

        {/* Username */}
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-5 py-3 pl-12 rounded-full shadow-inner bg-white/70 border border-white/60 focus:outline-none placeholder-gray-500 text-gray-800"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        {/* Password */}
        <div className="w-full relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 pl-12 rounded-full shadow-inner bg-white/70 border border-white/60 focus:outline-none placeholder-gray-500 text-gray-800"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
          </svg>
        </div>

        {/* Remember me & forgot password */}
        <div className="flex items-center justify-between w-full text-sm text-gray-800 mt-2">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="form-checkbox h-4 w-4 text-blue-600 bg-white/70 border-white/60 rounded" />
            <label htmlFor="remember-me" className="ml-2">Remember me</label>
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">Forgot password?</a>
        </div>

        {/* Login button */}
        <button
          onClick={() => navigate('/')} // change this to your target after login
          className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition mt-4"
        >
          LOGIN
        </button>

        {/* ✅ Signup Link to route to /signup */}
        <p className="text-sm text-gray-700 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
