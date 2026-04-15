const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // Check if token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header (Format is "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Decode the token and get user ID
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user in database, exclude password
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Move to the next middleware or route controller
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };