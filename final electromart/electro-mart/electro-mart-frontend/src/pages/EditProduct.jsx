import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:4321/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();

        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setImageUrl(data.image_url || '');
      } catch  {
        setError('Error loading product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      setError('Please fill all required fields');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:4321/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Failed to update product');
        return;
      }

      navigate('/seller/products');
    } catch  {
      setError('Server error. Please try again.');
    }
  };

  if (loading) {
    return <div className="text-center mt-16 text-white text-lg">Loading product...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-10 md:p-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
          Edit <span className="text-orange-500">Product</span>
        </h2>

        {error && (
          <div className="bg-red-600 text-white px-4 py-2 rounded mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <label className="block mb-1 font-medium">Product Name *</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description *</label>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Price *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL (optional)</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
