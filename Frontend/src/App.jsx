import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { useThemeStore } from "./store/useThemeStore";
import useAuthStore from "./store/authStore"; // <-- import your authStore

import SettingsPage from "./components/Settings/SettingsPage.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import LoginPage from "./components/Auth/LoginPage.jsx";
import RegisterPage from "./components/Auth/RegisterPage.jsx";
import MedicineDetailPage from "./components/MainComp/MedicineDetailPage.jsx"
import Home from "./components/MainComp/Home.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import CreateMedicineForm from "./components/UploadFrom.jsx/CreateMedicineForm.jsx";
import UpdateMedicineForm from "./components/UploadFrom.jsx/UpdateMedicineForm.jsx";
import MedicinesList from "./components/MainComp/MedicinesList.jsx";
import MyOrders from "./components/Order/MyOrders.jsx";

export default function App() {
  const { theme } = useThemeStore();
  const fetchUser = useAuthStore((state) => state.fetchUser);

  // Fetch user on app start to maintain login state
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Navbar />

      <div className="p-4 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/medicine/:id" element={<MedicineDetailPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create" element={<CreateMedicineForm />} />
          <Route path="/update/:id" element={<UpdateMedicineForm />} />
          <Route path="/list" element={<MedicinesList />} />
          <Route path="/order" element={<MyOrders />} />
        </Routes>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
