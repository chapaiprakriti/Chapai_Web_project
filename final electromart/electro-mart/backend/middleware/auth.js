// backend/middleware/auth.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'electro-mart-secret-key'; // Move to .env in production

// Middleware to verify token
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// Middleware to allow only sellers
function isSeller(req, res, next) {
  if (req.user.role !== 'seller') {
    return res.status(403).json({ error: 'Only sellers can perform this action' });
  }
  next();
}

module.exports = {
  verifyToken,
  isSeller
};