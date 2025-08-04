// routes/medicineRoutes.js
import express from 'express';
import { upload } from '../middleware/multer.js'; 
import {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} from '../controllers/medicineController.js'; 

const router = express.Router();

// Create a new medicine (with image upload)
router.post('/', upload.single('image'), createMedicine);

// Get all medicines
router.get('/', getAllMedicines);

// Get medicine by ID
router.get('/:id', getMedicineById);

// Update medicine by ID (optionally with new image upload)
router.put('/:id', upload.single('image'), updateMedicine);

// Delete medicine by ID
router.delete('/:id', deleteMedicine);

export default router;
