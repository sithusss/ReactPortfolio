import express from 'express';
import Projects from '../models/Projects.js';
const router = express.Router();

// Get all educations
router.get('/', async (req, res) => {
  try {
    const pro = await Projects.find();
    res.json(pro);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});


// Create new education
// In your backend routes (educationRoutes.js)
router.post('/', async (req, res) => {
  try {
    const newPro = new Projects(req.body);
    await newPro.save();
    res.status(201).json(newPro); // 201 = Created
  } catch (err) {
    res.status(400).json({ message: err.message }); // 400 = Bad Request
  }
});

// Update education
router.put('/:id', async (req, res) => {
  const updatedPro = await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPro);
});

// Delete education
router.delete('/:id', async (req, res) => {
  await Projects.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

export default router;
