import { create } from "zustand";
import axios from "axios";

// Create an axios instance with baseURL set to backend server
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000", 
  withCredentials: true,             
});

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // Register new user
  register: async (formData) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.post("/api/auth/register", formData);
      set({ user: res.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Registration failed",
        loading: false,
      });
    }
  },

  // Login
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.post("/api/auth/login", { email, password });
      set({ user: res.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
    }
  },

  // Logout
  logout: async () => {
    set({ loading: true, error: null });
    try {
      await axiosInstance.post("/api/auth/logout");
      set({ user: null, loading: false });
    } catch (err) {
      set({
        error: "Logout failed",
        loading: false,
        user: null,
      });
    }
  },

  // Fetch user info on app load
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get("/api/auth/me");
      set({ user: res.data, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },
}));

export default useAuthStore;
