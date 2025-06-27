// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './homepage';
import Login from './Login';
import Signup from './signup';
import Product from './product'; // ✅ Make sure your file is named `product.jsx`

function App() {
  return (
    <div>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page Route */}
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Product Page Route */}
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
