// const express = require('express');
// const Reminder = require('../models/Reminder');
// const router = express.Router();

// // Set Reminder for Lead
// router.post('/setReminder', async (req, res) => {
//   const { leadId, message, time, channel } = req.body;
//   try {
//     const lead = await Reminder.findById(leadId);
//     lead.reminder = { message, time, channel };
//     await lead.save();
//     res.status(200).send("Reminder set successfully");
//   } catch (err) {
//     res.status(500).send("Error setting reminder");
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

// Create reminder
router.post('/', async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reminders
router.get('/', async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
