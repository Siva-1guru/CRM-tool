
// const express = require('express');
// const Lead = require('../models/Lead');
// const router = express.Router();

// // Create a new lead
// router.post('/', async (req, res) => {
//   try {
//     const { name, contact, status } = req.body;
//     const newLead = new Lead({ name, contact, status });
//     const savedLead = await newLead.save();
//     res.status(201).json(savedLead);
//   } catch (err) {
//     res.status(500).json({ message: 'Error adding lead' });
//   }
// });

// // Get all leads
// router.get('/', async (req, res) => {
//   try {
//     const leads = await Lead.find();
//     res.status(200).json(leads);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching leads' });
//   }
// });

// // Update a lead
// router.put('/:id', async (req, res) => {
//   try {
//     const { name, contact, status } = req.body;
//     const updatedLead = await Lead.findByIdAndUpdate(
//       req.params.id,
//       { name, contact, status },
//       { new: true }
//     );
//     res.status(200).json(updatedLead);
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating lead' });
//   }
// });

// // Delete a lead
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedLead = await Lead.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedLead);
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting lead' });
//   }
// });

// // module.exports = router;
// const express = require('express');
// const Lead = require('../models/Lead');  // Assuming 'Lead' model is the same
// const router = express.Router();

// // Route to fetch all leads
// router.get('/', async (req, res) => {
//   try {
//     const leads = await Lead.find();
//     res.status(200).json(leads);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching leads' });
//   }
// });

// // Route to create a new lead
// router.post('/', async (req, res) => {
//   const { name, contact, status } = req.body;
//   const lead = new Lead({ name, contact, status });

//   try {
//     const newLead = await lead.save();
//     res.status(201).json(newLead);
//   } catch (err) {
//     res.status(400).json({ message: 'Error adding lead' });
//   }
// });

// // Route to update a lead
// router.put('/:id', async (req, res) => {
//   const { name, contact, status } = req.body;
//   try {
//     const updatedLead = await Lead.findByIdAndUpdate(
//       req.params.id,
//       { name, contact, status },
//       { new: true }
//     );
//     res.status(200).json(updatedLead);
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating lead' });
//   }
// });

// // Route to delete a lead
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedLead = await Lead.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedLead);
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting lead' });
//   }
// });

// module.exports = router;
// routes/leadRoutes.js
const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead'); // Assuming you have the model in models folder

// Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new lead
router.post('/', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
