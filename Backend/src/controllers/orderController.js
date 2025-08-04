// controllers/orderController.js

import Order from '../Models/Order.js';

// CREATE a new order
export const createOrder = async (req, res) => {
  try {
    const { user, medicines, total } = req.body;
    if (!user || !medicines || !medicines.length || total == null) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const order = new Order({ user, medicines, total });
    await order.save();
    const populatedOrder = await Order.findById(order._id)
      .populate('user')
      .populate('medicines');
    res.status(201).json(populatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE an order by Id
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL orders (with user and medicines populated)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user')
      .populate('medicines');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET order BY ID (with user and medicines populated)
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id)
      .populate('user')
      .populate('medicines');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
