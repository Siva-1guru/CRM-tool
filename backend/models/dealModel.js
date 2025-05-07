const mongoose = require('mongoose');

// Define the deal schema
const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  stage: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
});

// Create the Deal model
const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
