const express = require('express');
const Experience = require('../models/Experience');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create experience (protected)
router.post('/', auth, async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update experience (protected)
router.put('/:id', auth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    res.json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete experience (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;