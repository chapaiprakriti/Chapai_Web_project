// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const { verifyToken } = require('../middleware/auth');

// Place an order (authenticated buyer)
router.post('/', verifyToken, async (req, res) => {
  const buyerId = req.user.id;
  const { items } = req.body; // items = [{ product_id, quantity }]

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'No items to place order' });
  }

  try {
    let totalPrice = 0;
    const validItems = [];

    // Validate products and compute total
    for (const item of items) {
      const result = await db.query('SELECT price FROM products WHERE id = $1', [item.product_id]);
      if (result.rows.length === 0) {
        console.warn(`Product not found: ${item.product_id}`);
        continue; // skip invalid product
      }

      const price = result.rows[0].price;
      totalPrice += price * item.quantity;
      validItems.push({ ...item, price });
    }

    if (validItems.length === 0) {
      return res.status(400).json({ error: 'All products were invalid or removed.' });
    }

    // Create order
    const orderRes = await db.query(
      'INSERT INTO orders (buyer_id, total_price) VALUES ($1, $2) RETURNING *',
      [buyerId, totalPrice]
    );
    const orderId = orderRes.rows[0].id;

    // Insert order items
    for (const item of validItems) {
      await db.query(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',
        [orderId, item.product_id, item.quantity, item.price]
      );
    }

    res.status(201).json({ message: 'Order placed successfully', order_id: orderId });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Server error while placing order' });
  }
});

module.exports = router;
