// models/Medicine.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const medicineSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  companyName: { type: String, required: true },
  packageSize: { type: String, required: true },
  mrp: { type: Number, required: true },
  brand: { type: String, required: true },
  inStockNumber: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  // Store Cloudinary image info in an object
  image: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
}, { timestamps: true });

const Medicine = model("Medicine", medicineSchema);

export default Medicine;
