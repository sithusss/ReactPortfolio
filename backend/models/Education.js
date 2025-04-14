import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  name: String,
  institute: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'EduCategory' },
  period: String,
  description: String,
});

export default mongoose.model('Education', educationSchema);
