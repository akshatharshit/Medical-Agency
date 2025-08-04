import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMedicineStore from "../../store/medicineStore.js";
import toast from "react-hot-toast";

export default function UpdateMedicineForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const getMedicineById = useMedicineStore((state) => state.getMedicineById);
  const selectedMedicine = useMedicineStore((state) => state.selectedMedicine);
  const updateMedicine = useMedicineStore((state) => state.updateMedicine);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    brand: "",
    companyName: "",
    imageFile: null, // for replacement image
    packageSize: "",
    mrp: "",
    isAvailable: true,
    inStockNumber: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    getMedicineById(id);
  }, [id, getMedicineById]);

  useEffect(() => {
    if (selectedMedicine) {
      setFormData({
        title: selectedMedicine.title || "",
        description: selectedMedicine.description || "",
        brand: selectedMedicine.brand || "",
        companyName: selectedMedicine.companyName || "",
        imageFile: null,
        packageSize: selectedMedicine.packageSize || "",
        mrp: selectedMedicine.mrp || "",
        isAvailable: selectedMedicine.isAvailable || false,
        inStockNumber: selectedMedicine.inStockNumber || "",
      });
      setImagePreview(selectedMedicine.image?.url || null);
    }
  }, [selectedMedicine]);

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.description.trim()) errs.description = "Description is required";
    if (!formData.brand.trim()) errs.brand = "Brand is required";
    if (!formData.companyName.trim()) errs.companyName = "Company Name is required";
    if (!formData.packageSize.trim()) errs.packageSize = "Package Size is required";
    if (!formData.mrp || isNaN(formData.mrp) || Number(formData.mrp) <= 0)
      errs.mrp = "Valid MRP is required";
    if (
      formData.inStockNumber === "" ||
      isNaN(formData.inStockNumber) ||
      Number(formData.inStockNumber) < 0
    )
      errs.inStockNumber = "Valid stock quantity is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (file) => {
    if (!file) return;
    setFormData(prev => ({
      ...prev,
      imageFile: file,
    }));
    setImagePreview(URL.createObjectURL(file));
    setErrors(prev => ({ ...prev, imageFile: undefined }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const dataToSend = new FormData();
      dataToSend.append("title", formData.title);
      dataToSend.append("description", formData.description);
      dataToSend.append("brand", formData.brand);
      dataToSend.append("companyName", formData.companyName);
      if (formData.imageFile) dataToSend.append("image", formData.imageFile);
      dataToSend.append("packageSize", formData.packageSize);
      dataToSend.append("mrp", formData.mrp);
      dataToSend.append("isAvailable", formData.isAvailable);
      dataToSend.append("inStockNumber", formData.inStockNumber);

      await updateMedicine(id, dataToSend);
      toast.success("Medicine updated successfully!");
      navigate("/admin");
    } catch (err) {
      toast.error(err?.message || "Failed to update medicine. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedMedicine) return <p className="p-8 text-center">Loading medicine data...</p>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-base-100 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">Update Medicine</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            Title <span className="text-error">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
            value={formData.title}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.title && <p className="text-error mt-1">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Description <span className="text-error">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className={`textarea textarea-bordered w-full ${errors.description ? "textarea-error" : ""}`}
            rows={4}
            value={formData.description}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.description && <p className="text-error mt-1">{errors.description}</p>}
        </div>

        {/* Brand */}
        <div>
          <label htmlFor="brand" className="block font-semibold mb-1">
            Brand <span className="text-error">*</span>
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            className={`input input-bordered w-full ${errors.brand ? "input-error" : ""}`}
            value={formData.brand}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.brand && <p className="text-error mt-1">{errors.brand}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block font-semibold mb-1">
            Company Name <span className="text-error">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            className={`input input-bordered w-full ${errors.companyName ? "input-error" : ""}`}
            value={formData.companyName}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.companyName && <p className="text-error mt-1">{errors.companyName}</p>}
        </div>

        {/* Image Upload Dropzone */}
        <div>
          <label className="block font-semibold mb-1">
            Medicine Image (upload new to replace, or leave as is)
          </label>
          <div
            className={`border-2 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer select-none transition-colors ${
              isDragging ? "border-primary bg-primary/10" : "border-base-300 bg-base-200"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                fileInputRef.current?.click();
              }
            }}
            aria-label="Upload medicine image"
          >
            {!imagePreview ? (
              <p className="text-base-content/70">Drag & drop or click to select image</p>
            ) : (
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 rounded object-contain"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFileChange(e.target.files[0]);
                }
              }}
              disabled={loading}
            />
          </div>
        </div>

        {/* Package Size */}
        <div>
          <label htmlFor="packageSize" className="block font-semibold mb-1">
            Package Size <span className="text-error">*</span>
          </label>
          <input
            id="packageSize"
            name="packageSize"
            type="text"
            className={`input input-bordered w-full ${errors.packageSize ? "input-error" : ""}`}
            value={formData.packageSize}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.packageSize && <p className="text-error mt-1">{errors.packageSize}</p>}
        </div>

        {/* MRP */}
        <div>
          <label htmlFor="mrp" className="block font-semibold mb-1">
            MRP (₹) <span className="text-error">*</span>
          </label>
          <input
            id="mrp"
            name="mrp"
            type="number"
            min="0"
            step="0.01"
            className={`input input-bordered w-full ${errors.mrp ? "input-error" : ""}`}
            value={formData.mrp}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.mrp && <p className="text-error mt-1">{errors.mrp}</p>}
        </div>

        {/* Availability */}
        <div className="flex items-center space-x-3">
          <input
            id="isAvailable"
            name="isAvailable"
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={formData.isAvailable}
            onChange={handleChange}
            disabled={loading}
          />
          <label htmlFor="isAvailable" className="font-semibold">
            Available In Stock
          </label>
        </div>

        {/* In Stock Number */}
        <div>
          <label htmlFor="inStockNumber" className="block font-semibold mb-1">
            In Stock Number <span className="text-error">*</span>
          </label>
          <input
            id="inStockNumber"
            name="inStockNumber"
            type="number"
            min="0"
            className={`input input-bordered w-full ${errors.inStockNumber ? "input-error" : ""}`}
            value={formData.inStockNumber}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.inStockNumber && <p className="text-error mt-1">{errors.inStockNumber}</p>}
        </div>

        <button type="submit" disabled={loading} className={`btn btn-primary w-full ${loading ? "loading" : ""}`}>
          {loading ? "Updating..." : "Update Medicine"}
        </button>
      </form>
    </div>
  );
}
