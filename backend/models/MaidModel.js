const mongoose = require('mongoose');

const MaidSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  email: String,
  photo: String,
  serviceType: String,
  location: String,
  workingHours: String,
  experience: String,
  workHistory: String,
  languages: String,
  availabilityDate: Date,
  availabilityTime: String,
  budgetMin: Number,
  budgetMax: Number,
  idProof: String,
  references: String,
  status: String,
  extraNotes: String,
}, { timestamps: true });

module.exports = mongoose.model('Maid', MaidSchema);
