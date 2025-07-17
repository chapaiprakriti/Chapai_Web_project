const express = require('express');
const router = express.Router();
const db = require('../db');
const { verifyToken, isSeller } = require('../middleware/auth');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET product by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


  // UPDATE product by id
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image_url, seller_id } = req.body;
  
    try {
      const result = await db.query(
        `UPDATE products SET name=$1, description=$2, price=$3, image_url=$4, seller_id=$5 WHERE id=$6 RETURNING *`,
        [name, description, price, image_url, seller_id, id]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });


  // DELETE product by id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
      const result = await db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });



// POST /api/products — only sellers can post
router.post('/', verifyToken, isSeller, async (req, res) => {
  const { name, description, price, image_url } = req.body;
  const seller_id = req.user.id;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO products (name, description, price, image_url, seller_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, description, price, image_url, seller_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;