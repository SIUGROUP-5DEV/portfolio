const express = require('express');
const Profile = require('../models/Profile');
const auth = require('../middleware/auth');

const router = express.Router();

// Get profile
router.get('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    // If no profile exists, create a default one
    if (!profile) {
      profile = new Profile({
        name: 'Eng. Ali',
        title: 'Software Development Agent',
        bio: 'I provide comprehensive software development services, from web applications to mobile solutions. Delivering quality code and innovative solutions for your business needs.',
        email: 'ali@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        socialLinks: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'ali@example.com'
        }
      });
      await profile.save();
    }
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update profile (protected)
router.put('/', auth, async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;