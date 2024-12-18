import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Category', categorySchema);
