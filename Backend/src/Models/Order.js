import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  medicines: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',
    required: true
  }],
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Order', orderSchema);
