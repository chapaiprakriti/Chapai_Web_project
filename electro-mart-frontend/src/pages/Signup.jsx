// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('buyer');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  //state

  const navigate = useNavigate();
  //gate

  const handleSubmit = async (e) => {
    //e
    //ef
    e.preventDefault();
    //ef
    //pre
    setErrorMsg('');
    setSuccessMsg('');
    //set

    if (password !== confirmPassword) {
      setErrorMsg("Passwords don't match");
      return;
      //ret
    }

    try {
      const res = await fetch('http://localhost:4321/api/users/register', {
        method: 'POST',
        //post
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
        //role
      });

      const data = await res.json();

      if (!res.ok) {
        //ok
        setErrorMsg(data.error || 'Signup failed');
        //else
      } else {
        setSuccessMsg('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 text-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Create Account</h2>

        {errorMsg && (
          <div className="mb-4 text-red-400 bg-red-950 p-2 rounded">{errorMsg}</div>
        )}
        {successMsg && (
          <div className="mb-4 text-green-400 bg-green-950 p-2 rounded">{successMsg}</div>
        )}

        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Role</label>
          <select
            className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded font-bold text-lg transition"
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-orange-400 hover:text-orange-500 underline"
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  );
}
