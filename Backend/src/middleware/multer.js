import multer from 'multer';

// Store files in memory to upload via stream to Cloudinary
const storage = multer.memoryStorage();
export const upload = multer({ storage });
