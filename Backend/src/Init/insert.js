import mongoose from "mongoose";
import Medicine from "../Models/Medicine.js";
import medicines from "./data.js";

async function seedMedicines() {
    await mongoose.connect("mongodb+srv://akshatsingh132004:VOnjstdXRd9jIrrn@cluster0.sa5apmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  await Medicine.insertMany(medicines);
    console.log("Medicines inserted");
    await mongoose.disconnect();
}

seedMedicines().catch(console.error);
