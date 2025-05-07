// // // const express = require('express');
// // // const router = express.Router();
// // // const Meeting = require('../models/Meeting');

// // // // GET all meetings
// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const meetings = await Meeting.find();
// // //     res.json(meetings);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // POST create meeting
// // // router.post('/', async (req, res) => {
// // //   const { title, date, participants, description } = req.body;

// // //   try {
// // //     const newMeeting = new Meeting({ title, date, participants, description });
// // //     await newMeeting.save();
// // //     res.status(201).json(newMeeting);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Error creating meeting' });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const Meeting = require('../models/Meeting');

// // // GET all meetings
// // router.get('/', async (req, res) => {
// //   try {
// //     const meetings = await Meeting.find();
// //     res.json(meetings);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // // POST new meeting
// // router.post('/', async (req, res) => {
// //   const meeting = new Meeting({
// //     title: req.body.title,
// //     date: req.body.date,
// //     time: req.body.time,
// //     participants: req.body.participants,
// //     description: req.body.description
// //   });

// //   try {
// //     const newMeeting = await meeting.save();
// //     res.status(201).json(newMeeting);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Meeting = require('../models/Meeting');

// // GET all meetings
// router.get('/', async (req, res) => {
//   try {
//     const meetings = await Meeting.find();  // Find all meetings in the database
//     res.json(meetings);  // Send the meetings as JSON response
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a new meeting
// router.post('/', async (req, res) => {
//   try {
//     const newMeeting = new Meeting(req.body);  // Create a new meeting from the request body
//     await newMeeting.save();  // Save the new meeting to the database
//     res.status(201).json(newMeeting);  // Return the saved meeting as the response
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
// backend/routes/meetings.js
const express = require("express");
const router = express.Router();
const Meeting = require("../models/Meeting");

router.get("/", async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.json(meetings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newMeeting = new Meeting(req.body);
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
