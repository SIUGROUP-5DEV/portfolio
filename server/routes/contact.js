const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Here you would typically save to database or send email
    // For now, we'll just return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;