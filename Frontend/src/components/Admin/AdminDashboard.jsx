import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMedicineStore from "../../store/medicineStore.js";
import { toast } from "react-hot-toast";
import ConfirmModal from "./ConfirmModal";
import AdminOrders from "../Order/AdminOrders.jsx"

export default function AdminDashboard() {
  const { medicines, getAllMedicines, deleteMedicine } = useMedicineStore();
  const [dummyCartCount] = useState(123);
  const [activeTab, setActiveTab] = useState("catalog");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!medicines || medicines.length === 0) {
      getAllMedicines();
    }
  }, [medicines, getAllMedicines]);

  const handleDeleteConfirmed = async () => {
    if (!confirmDeleteId) return;
    try {
      await deleteMedicine(confirmDeleteId);
      toast.success("Medicine deleted successfully");
    } catch (err) {
      toast.error("Failed to delete medicine. Please try again.");
    } finally {
      setConfirmDeleteId(null);
    }
  };

  const handleDelete = (id) => {
    setConfirmDeleteId(id);
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-base-200">
      <aside className="w-full md:w-60 bg-base-300 p-3 md:p-6 flex flex-col space-y-4 text-base-content shadow-lg md:min-h-screen sticky top-0">
        <h2 className="text-xl md:text-2xl font-extrabold select-none text-center md:text-left mb-4">
          Admin Dashboard
        </h2>


        <nav className="flex flex-col space-y-3 w-full">
          <button
            className={`btn w-full text-sm md:text-base font-semibold ${activeTab === "catalog" ? "btn-primary" : "btn-outline btn-primary"
              }`}
            onClick={() => setActiveTab("catalog")}
            aria-current={activeTab === "catalog" ? "page" : undefined}
          >
            Manage Catalog
          </button>
          <button
            className={`btn w-full text-sm md:text-base font-semibold ${activeTab === "cart" ? "btn-primary" : "btn-outline btn-primary"
              }`}
            onClick={() => setActiveTab("cart")}
            aria-current={activeTab === "cart" ? "page" : undefined}
          >
            Orders
          </button>
        </nav>
      </aside>


      <main className="flex-grow p-6 md:p-8 overflow-auto max-w-6xl">
        {activeTab === "catalog" && (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h1 className="text-3xl font-bold text-primary">Medicines Catalog</h1>
              <button className="btn btn-primary w-full md:w-auto" onClick={() => navigate("/create")}>
                Add More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {medicines?.map((med) => (
                <div key={med._id} className="rounded-xl border border-base-300 bg-base-100 p-4 shadow flex flex-col">
                  <div className="flex-grow">
                    <img
                      src={med.image?.url}
                      alt={med.title}
                      className="w-full h-32 object-contain mb-3 rounded"
                      loading="lazy"
                    />
                    <h3 className="text-lg font-semibold mb-1 truncate">{med.title}</h3>
                    <p className="text-sm text-base-content/70 mb-3 line-clamp-3">
                      {med.description.length > 90 ? med.description.slice(0, 90) + "…" : med.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                      <span className="badge badge-primary px-2">Brand: {med.brand}</span>
                      <span className="badge badge-info px-2">{med.companyName}</span>
                      <span className={`badge px-2 ${med.isAvailable ? "badge-success" : "badge-error"}`}>
                        {med.isAvailable ? "In Stock" : "Out of Stock"}
                      </span>
                      <span className="badge badge-secondary px-2">Price: ₹{med.mrp}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="btn btn-sm btn-outline btn-accent flex-grow" onClick={() => handleUpdate(med._id)}>
                      Update
                    </button>
                    <button className="btn btn-sm btn-outline btn-error flex-grow" onClick={() => handleDelete(med._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}



        {activeTab === "cart" && (
          <div className="p-8 bg-base-100 rounded-lg shadow max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Orders</h2>
            <AdminOrders/>
          </div>
        )}



        {/* Confirm Delete Modal */}
        <ConfirmModal
          isOpen={!!confirmDeleteId}
          message="Are you sure you want to delete this medicine from the catalog?"
          onConfirm={handleDeleteConfirmed}
          onCancel={cancelDelete}
        />
      </main>
    </div>
  );
}
