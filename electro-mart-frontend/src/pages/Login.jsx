import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  //const

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    //success
    //set

    try {
      const res = await fetch('http://localhost:4321/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      //const

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
        //return
      }

      setSuccess('Login successful! Redirecting...');
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setTimeout(() => {
        if (data.user.role === 'buyer') {
          navigate('/buyer/home');
        } else if (data.user.role === 'seller') {
          navigate('/seller/home');
        } else {
          navigate('/');
          //navigation
        }
      }, 1000);
    } catch  {
      setError('Network error. Please try again.');
    }
  };

  return (
    //return
    <div className="min-h-screen flex flex-col bg-gray-800">
      <main className="flex-grow flex justify-center items-center px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 text-white p-10 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-4xl font-extrabold mb-8 text-center">
            Login to <span className="text-orange-500">ElectroMart</span>
          </h2>

          {error && (
            <div className="mb-6 p-3 bg-red-600 bg-opacity-30 border border-red-400 text-red-100 rounded">
              {error}
            </div>
            //div
          )}
          {success && (
            <div className="mb-6 p-3 bg-green-600 bg-opacity-30 border border-green-400 text-green-100 rounded">
              {success}
            </div>
          )}

          <label htmlFor="email" className="block font-semibold mb-2 text-lg">
            Email Address
            //email
          </label>
          <input
            id="email"
            type="email"
            className="w-full mb-6 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="block font-semibold mb-2 text-lg">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full mb-8 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          //on

          <button
          //button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
          >
            Login
            //login
          </button>

          <p className="mt-8 text-center text-gray-300 text-sm">
            New to ElectroMart?{' '}
            <Link
              to="/signup"
              className="text-orange-400 hover:text-orange-500 font-semibold"
            >
              Create an account
              //acc
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
