// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './homepage';
import Login from './Login';
import Signup from './signup'; // Make sure the file is named exactly `signup.jsx`

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
      </Routes>
    </div>
  );
}

export default App;
