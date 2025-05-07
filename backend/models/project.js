const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: String, required: true },
  status: { type: String, enum: ['New', 'In Progress', 'Completed'], default: 'New' },
  deadline: { type: Date },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  description: { type: String },
});

module.exports = mongoose.model('Project', projectSchema);
