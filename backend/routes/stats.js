const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');

// GET stats
router.get('/', async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats();
      await stats.save();
    }
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT stats (update)
router.put('/', async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats(req.body);
    } else {
      stats.set(req.body);
    }
    await stats.save();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
