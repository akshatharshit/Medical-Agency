import jwt from 'jsonwebtoken';

// Middleware to protect routes
export const protect = (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, token missing' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId from token to request object
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Not authorized, token invalid or expired' });
  }
};
