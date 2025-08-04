import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/UserModel.js';
import { generateToken } from '../Util/jsonWeb.js'; 

// REGISTER Controller
export const register = async (req, res) => {
  try {
    const { name, email, phoneNo, shopName, address, password, role } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({
      name,
      email,
      phoneNo,
      shopName,
      address,
      password: hashedPassword,
      role: role || 'user',
    });

    // Generate token and set cookie
    generateToken(user._id, res);

    // Send response without password
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      shopName: user.shopName,
      address: user.address,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGIN Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token and set cookie
    generateToken(user._id, res);

    // Send response without password
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      shopName: user.shopName,
      address: user.address,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get current logged in user based on JWT token cookie
export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user without password
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('JWT verification failed:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Middleware to protect routes
export const protect = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Add userId to req for next middleware/controllers

    next();
  } catch (error) {
    console.error('JWT verification error in protect middleware:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// Logout Controller
export const logout = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0), // Expire the cookie 
    path : '/',
  });

  res.json({ message: 'Logged out successfully' });
};

