const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  profileImage: {
    type: String,
    trim: true
  },
  heroImage: {
    type: String,
    trim: true
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    email: String
  },
  stats: {
    businessPartners: {
      type: Number,
      default: 200
    },
    satisfiedCustomers: {
      type: Number,
      default: 30000
    },
    yearsExperience: {
      type: Number,
      default: 10
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);