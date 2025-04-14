import express from 'express';
import EduCategory from '../models/EduCategory.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const cats = await EduCategory.find();
  res.json(cats);
});

export default router;
