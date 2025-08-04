import express from 'express';
import {protect} from '../middleware/protect.js';
import { createOrder, deleteOrder, getAllOrders, getOrderById } from '../controllers/orderController.js';
const router = express.Router();

router.post('/orders',protect, createOrder);
router.delete('/orders/:id',protect, deleteOrder);
router.get('/orders',protect, getAllOrders);
router.get('/orders/:id',protect, getOrderById);
export default router;
