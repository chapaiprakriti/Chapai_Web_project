const { Pool } = require('pg');
//const
require('dotenv').config();
//require

const pool = new Pool({
  host: process.env.DB_HOST,
  //host
  //port
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //database
  //password
  //user
});

pool.connect()
//pool
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch((err) => console.error('❌ DB connection error', err));

module.exports = pool;



// -- STEP 1: Create the database (run outside psql or from superuser)
// -- CREATE DATABASE electro_mart;

// -- STEP 2: Connect to the database
// -- \c electro_mart
//electro mart

// -- STEP 3: Create ENUM type for user roles
// CREATE TYPE user_role AS ENUM ('buyer', 'seller');

// -- STEP 4: Create Users Table
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     password VARCHAR(100) NOT NULL,
//     role user_role NOT NULL DEFAULT 'buyer'
// );

// -- STEP 5: Create Products Table
// CREATE TABLE products (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     description TEXT,
//     price NUMERIC(10, 2) NOT NULL,
//     image_url TEXT,
//     seller_id INTEGER REFERENCES users(id)
// );

// -- STEP 6: Create Cart Items Table
// CREATE TABLE cart_items (
//     id SERIAL PRIMARY KEY,
//     buyer_id INTEGER REFERENCES users(id),
//     product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
//     quantity INTEGER DEFAULT 1,
//     added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- STEP 7: Create Orders Table
// CREATE TABLE orders (
//     id SERIAL PRIMARY KEY,
//     buyer_id INTEGER REFERENCES users(id),
//     total_price NUMERIC(10,2),
//     ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- STEP 8: Create Order Items Table
// CREATE TABLE order_items (
//     id SERIAL PRIMARY KEY,
//     order_id INTEGER REFERENCES orders(id),
//     product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
//     quantity INTEGER,
//     price NUMERIC(10, 2)
// );

// -- STEP 9: Optional Sample Data
// -- Insert one seller and one buyer
// INSERT INTO users (name, email, password, role)
// VALUES 
//   ('Alice Seller', 'alice@example.com', 'hashedpass1', 'seller'),
//   ('Bob Buyer', 'bob@example.com', 'hashedpass2', 'buyer');

// -- Insert sample product
// INSERT INTO products (name, description, price, image_url, seller_id)
// VALUES 
//   ('MacBook Pro', 'Apple laptop with M2 chip', 2499.99, 'https://via.placeholder.com/300x200?text=MacBook', 1);