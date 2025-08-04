import express from 'express';
import { protect, register, login, getCurrentUser,logout } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getCurrentUser);

export default router;
