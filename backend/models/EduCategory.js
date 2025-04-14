import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  catName: String,
});

export default mongoose.model('EduCategory', categorySchema);
