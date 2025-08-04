// stores/useOrderStore.js

import { create } from 'zustand';
import axios from 'axios';

// Create an axios instance with baseURL set to backend server
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000", 
  withCredentials: true,           
});

const useOrderStore = create((set) => ({
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,

  // Fetch all orders
  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/api/orders');
      set({ orders: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Fetch one order by ID
  fetchOrderById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/api/orders/${id}`);
      set({ currentOrder: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Create a new order
  createOrder: async (orderData) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/api/orders', orderData);
      set((state) => ({
        orders: [...state.orders, response.data],
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Delete an order by ID
  deleteOrder: async (id) => {
    set({ loading: true, error: null });
    try {
      await axiosInstance.delete(`/api/orders/${id}`);
      set((state) => ({
        orders: state.orders.filter(order => order._id !== id),
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useOrderStore;
