import { create } from "zustand";
import axios from "axios";

// Create axios instance with backend base URL and credentials
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000", 
  withCredentials: true,             
});

const useMedicineStore = create((set, get) => ({
  medicines: [],
  selectedMedicine: null,
  loading: false,
  error: null,

  // Create a new medicine (with image file)
  createMedicine: async (formData) => {
    set({ loading: true, error: null });
    try {
      // formData should be a FormData object with image and all fields
      const res = await axiosInstance.post("/api/medicines", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({
        medicines: [res.data, ...state.medicines],
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || "Create failed",
        loading: false,
      });
    }
  },

  // Get all medicines
  getAllMedicines: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get("/api/medicines");
      set({ medicines: res.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Fetch failed",
        loading: false,
      });
    }
  },

  // Get medicine by ID
  getMedicineById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/api/medicines/${id}`);
      set({ selectedMedicine: res.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Fetch by ID failed",
        selectedMedicine: null,
        loading: false,
      });
    }
  },

  // Update medicine by ID (optionally with new image file)
  updateMedicine: async (id, formData) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.put(`/api/medicines/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({
        medicines: state.medicines.map((med) =>
          med._id === id ? res.data : med
        ),
        selectedMedicine: res.data,
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || "Update failed",
        loading: false,
      });
    }
  },

  // Delete medicine by ID
  deleteMedicine: async (id) => {
    set({ loading: true, error: null });
    try {
      await axiosInstance.delete(`/api/medicines/${id}`);
      set((state) => ({
        medicines: state.medicines.filter((med) => med._id !== id),
        selectedMedicine:
          state.selectedMedicine?._id === id ? null : state.selectedMedicine,
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || "Delete failed",
        loading: false,
      });
    }
  },
}));

export default useMedicineStore;
