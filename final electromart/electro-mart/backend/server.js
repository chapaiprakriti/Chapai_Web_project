// backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4321;



// Middleware
app.use(cors());
app.use(express.json());

// Debug middleware: log incoming requests to /api/products
app.use('/api/products', (req, res, next) => {
  console.log('→ ${req.method} request to /api/products');
  next();
});

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Electro Mart API!');
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});