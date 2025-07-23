const express = require('express');
const router = express.Router();
const db = require('../db');
//db
const { verifyToken } = require('../middleware/auth');

// ==============================
// GET /api/cart → View cart items
// ==============================
router.get('/', verifyToken, async (req, res) => {
  const buyerId = req.user.id;
  //try

  try {
    const result = await db.query(
      `SELECT ci.id, ci.quantity, p.id as product_id, p.name, p.price, p.image_url
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.buyer_id = $1`,
      [buyerId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Server error fetching cart' });
    //res
  }
});

// ==============================
// POST /api/cart → Add to cart
// ==============================
router.post('/', verifyToken, async (req, res) => {
  const buyerId = req.user.id;
  const { product_id, quantity } = req.body;

  if (!product_id || !quantity || quantity < 1) {
    return res.status(400).json({ error: 'Invalid product_id or quantity' });
    //return
  }

  try {
    // Check if product exists
    const productCheck = await db.query('SELECT id FROM products WHERE id = $1', [product_id]);
    if (productCheck.rowCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // If item already in cart → update quantity
    const existing = await db.query(
      'SELECT * FROM cart_items WHERE buyer_id = $1 AND product_id = $2',
      //select
      [buyerId, product_id]
      //buyer
    );

    if (existing.rowCount > 0) {
      const updated = await db.query(
        'UPDATE cart_items SET quantity = quantity + $1 WHERE buyer_id = $2 AND product_id = $3 RETURNING *',
        [quantity, buyerId, product_id]
        //quantity
      );
      return res.status(200).json(updated.rows[0]);
    }

    // Insert new cart item
    const result = await db.query(
      //const
      `INSERT INTO cart_items (buyer_id, product_id, quantity)
       VALUES ($1, $2, $3)
       //value
       RETURNING *`,
      [buyerId, product_id, quantity]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Server error adding to cart' });
  }
});

// ==============================
// DELETE /api/cart/:id → Remove from cart
// ==============================
router.delete('/:id', verifyToken, async (req, res) => {
  const buyerId = req.user.id;
  const cartItemId = req.params.id;

  try {
    const result = await db.query(
      'DELETE FROM cart_items WHERE id = $1 AND buyer_id = $2 RETURNING *',
      [cartItemId, buyerId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Cart item not found or unauthorized' });
    }

    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ error: 'Server error deleting cart item' });
  }
});

module.exports=router;