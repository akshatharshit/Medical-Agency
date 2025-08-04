import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from "./src/routes/authRoutes.js"
import medicineRoutes from "./src/routes/medicineRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

dotenv.config();

const app= express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:`${process.env.FRONTEND_URL}`, 
    credentials: true
}));



app.use('/api/auth', authRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api', orderRoutes);


mongoose.connect(process.env.MONGO_URI,{  
}).
then(()=>{
    console.log("Connected to MongoDB");
    const PORT= process.env.PORT || 5000;
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
});