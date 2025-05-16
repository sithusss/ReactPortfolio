import express from 'express';
import Contact from '../models/Contact.js';
const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: "Message saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// PUT /api/contact/:id/read
router.put('/contact/:id/read', async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, { status: 'read' });
    res.status(200).json({ message: 'Marked as read' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
