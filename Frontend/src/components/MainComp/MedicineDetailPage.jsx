import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMedicineStore from "../../store/medicineStore.js";

export default function MedicineDetailPage() {
  const { id } = useParams(); // medicine _id from URL
  const navigate = useNavigate();
  const { medicines, getAllMedicines } = useMedicineStore();
  const [medicine, setMedicine] = useState(null);

  // Load medicines if not loaded yet
  useEffect(() => {
    if (!medicines || medicines.length === 0) {
      getAllMedicines();
    }
    // eslint-disable-next-line
  }, []);

  // Find the medicine by id once medicines are loaded or when id changes
  useEffect(() => {
    if (medicines && medicines.length > 0) {
      const found = medicines.find((med) => med._id === id);
      setMedicine(found || null);
    }
  }, [medicines, id]);

  if (!medicine) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <p className="text-lg text-gray-500">Loading or medicine not found...</p>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-primary mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm btn-outline btn-primary"
      >
        ← Back to list
      </button>

      <h1 className="text-4xl font-bold text-primary">{medicine.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={medicine.image?.url}
          alt={medicine.title}
          className="w-full md:w-1/3 rounded-lg border border-base-300 shadow"
          loading="lazy"
        />
        <div className="flex flex-col flex-grow space-y-4">
          <p className="text-lg text-base-content/80">{medicine.description}</p>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary">Brand: {medicine.brand}</span>
            <span className="badge badge-info">{medicine.companyName}</span>
            <span className={`badge ${medicine.isAvailable ? "badge-success" : "badge-error"}`}>
              {medicine.isAvailable ? "In Stock" : "Out of Stock"}
            </span>
            <span className="badge badge-outline">Qty: {medicine.inStockNumber}</span>
          </div>

          <div className="text-lg font-semibold">
            Pack Size: <span className="text-primary">{medicine.packageSize}</span>
          </div>
          <div className="text-lg font-semibold">
            MRP: <span className="text-primary">₹{medicine.mrp}</span>
          </div>
        </div>
      </div>

      {/* Additional info or actions can be added here if you want */}
    </div>
  );
}
