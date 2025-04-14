import express from 'express';
import Education from '../models/Education.js';
const router = express.Router();

// Get all educations
router.get('/', async (req, res) => {
  const edu = await Education.find().populate('category');
  res.json(edu);
});

// Create new education
router.post('/', async (req, res) => {
  const newEdu = new Education(req.body);
  await newEdu.save();
  res.status(201).json(newEdu);
});

// Update education
router.put('/:id', async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete education
router.delete('/:id', async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

export default router;
