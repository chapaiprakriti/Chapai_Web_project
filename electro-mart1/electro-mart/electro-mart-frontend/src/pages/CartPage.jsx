import React, { useEffect, useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:4321/api/cart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setCartItems(data);
      } catch (err) {
        console.error('Error fetching cart:', err);
        setMessage('Failed to load cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    const confirmDelete = window.confirm('Remove this item from cart?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:4321/api/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Failed to remove item');

      setCartItems(cartItems.filter(item => item.id !== id));
      setMessage('');
    } catch (err) {
      console.error('Error deleting item:', err);
      setMessage('Failed to delete item');
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      setMessage('Cart is empty. Add products before checkout.');
      return;
    }

    const items = cartItems.map(item => ({
      product_id: item.product_id || item.id,
      quantity: item.quantity,
    }));

    if (!items.every(i => i.product_id)) {
      setMessage('Cart data invalid. Missing product IDs.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:4321/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items }),
      });

      if (!res.ok) {
        const data = await res.json();
        setMessage(data.error || 'Failed to place order');
        return;
      }

      setCartItems([]);
      setOrderSuccess(true);
      setOrderTotal(total);
      setMessage('');
    } catch (err) {
      console.error('Checkout error:', err);
      setMessage('Server error during checkout.');
    }
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading cart...</div>;

  return (
    <div className="min-h-screen bg-gray-800 px-4 py-12 flex justify-center">
      <div className="max-w-5xl w-full bg-gray-700 rounded-lg p-10 shadow-xl">
        <h1 className="text-3xl font-extrabold text-white mb-6">Your Cart</h1>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        {orderSuccess && (
          <p className="text-green-400 mb-4 font-semibold">
            Order placed successfully! Total cost: ${orderTotal.toFixed(2)}
          </p>
        )}

        {cartItems.length === 0 ? (
          <p className="text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cartItems.map(item => (
                <div key={item.id} className="bg-gray-800 rounded p-4 shadow">
                  <h2 className="text-lg font-semibold text-white mb-1">{item.name}</h2>
                  <p className="text-gray-400">Quantity: {item.quantity}</p>
                  <p className="text-orange-400 font-bold">Price: ${item.price}</p>
                  <p className="text-gray-300 mt-1">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="text-right font-semibold text-xl text-white mb-6">
              Total: ${total.toFixed(2)}
            </div>

            <button
              onClick={handleCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition w-full sm:w-auto"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
