import Medicine from "../Models/Medicine.js";
import cloudinary from "../Util/cloudinary.js"; 
import streamifier from "streamifier";


const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "medicines" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// CREATE Medicine
export const createMedicine = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // Upload image buffer to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer);

    const medicine = await Medicine.create({
      title: req.body.title,
      description: req.body.description,
      companyName: req.body.companyName,
      packageSize: req.body.packageSize,
      mrp: req.body.mrp,
      brand: req.body.brand,
      inStockNumber: req.body.inStockNumber,
      isAvailable: req.body.isAvailable !== undefined ? req.body.isAvailable : true,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    res.status(201).json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while creating medicine" });
  }
};

// GET all medicines
export const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching medicines" });
  }
};

// GET medicine by ID
export const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching medicine" });
  }
};

// UPDATE medicine by ID (optional image update)
export const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    // Update fields from req.body if provided
    const fieldsToUpdate = [
      "title",
      "description",
      "companyName",
      "packageSize",
      "mrp",
      "brand",
      "inStockNumber",
      "isAvailable",
    ];

    fieldsToUpdate.forEach((field) => {
      if (req.body[field] !== undefined) {
        medicine[field] = req.body[field];
      }
    });

    // If new image file uploaded, replace on Cloudinary
    if (req.file) {
      // Delete old image from Cloudinary
      if (medicine.image?.public_id) {
        await cloudinary.uploader.destroy(medicine.image.public_id);
      }

      // Upload new image buffer
      const result = await uploadToCloudinary(req.file.buffer);

      medicine.image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    const updatedMedicine = await medicine.save();
    res.json(updatedMedicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while updating medicine" });
  }
};

// DELETE medicine by ID and remove image from Cloudinary
export const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    // Delete image from Cloudinary if exists
    if (medicine.image?.public_id) {
      await cloudinary.uploader.destroy(medicine.image.public_id);
    }

    // Delete medicine document
    await medicine.deleteOne(); // <-- FIXED: use deleteOne instead of remove

    res.json({ message: "Medicine deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while deleting medicine" });
  }
};

