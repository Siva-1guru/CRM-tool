const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  subject: String,
  dueDate: String,
  contact: String,
  account: String,
  status: String,
  priority: String,
  reminder: Boolean,
});

module.exports = mongoose.model('Task', taskSchema);
