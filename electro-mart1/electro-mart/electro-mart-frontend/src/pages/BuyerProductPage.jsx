import React, { useEffect, useState } from 'react';

export default function BuyerProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4321/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to load products', err);
        setMessage('❌ Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:4321/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: productId, quantity: 1 }),
      });

      const contentType = res.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server error: ${res.status} - ${text}`);
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to add to cart');
      }

      setMessage('✅ Product added to cart!');
    } catch (err) {
      console.error(err.message);
      setMessage(`❌ ${err.message}`);
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading products...</div>;

  return (
    <div className="min-h-screen bg-gray-800 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-white text-center">
          Explore <span className="text-orange-500">Products</span>
        </h1>

        {message && (
          <div className="mb-4 text-sm px-4 py-2 rounded font-medium transition-all duration-300
            text-white bg-orange-500 shadow-md max-w-md mx-auto text-center"
          >
            {message}
          </div>
        )}

        {products.length === 0 ? (
          <p className="text-gray-300 text-center">No products available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-700 border border-gray-600 rounded shadow-md p-4 flex flex-col text-white"
              >
                <div className="h-40 w-full overflow-hidden rounded mb-4">
                  <img
                    src={product.image_url || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                <p className="text-gray-300 text-sm mb-2 line-clamp-2">{product.description}</p>
                <p className="text-orange-500 font-bold mb-4">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="mt-auto bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
