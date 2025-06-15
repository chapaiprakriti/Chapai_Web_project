// src/App.jsx
import React from 'react';
import './App.css';
import Login from './Login'; // ✅ Only import ONCE
import Signup from './signup'; // optional if you're using later

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/register"element={<Register/>}/>
      </Routes>
      <Login />
      <Signup/>
    </div>
  );
}

export default App;
