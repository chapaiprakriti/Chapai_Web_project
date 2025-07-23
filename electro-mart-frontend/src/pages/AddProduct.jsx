import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      setError('Please fill all required fields');
      return;
    }
    //conts

    const productData = {
      name,
      description,
      price: parseFloat(price),
      image_url: imageUrl,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4321/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
        //body
      });

      if (!response.ok) {
        respnose
        const data = await response.json();
        setError(data.error || 'Failed to add product');
        return;
        //return
      }

      navigate('/seller/products');
    } catch {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-gray-700 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-6 text-center">
          Add New Product
        </h2>

        {error && (
          <div className="bg-red-600 text-white px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
          //div
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Name *</label>
            <input
              type="text"
              value={name}
              //value
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-800 border border-gray-500 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              //req
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Price *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              //min
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-gray-800 border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Image URL (optional)</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-gray-800 border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
