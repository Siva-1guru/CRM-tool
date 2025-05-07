const express = require('express');
const router = express.Router();
const { getDeals, addDeal, updateDeal, deleteDeal } = require('../controllers/dealController');

// GET all deals
router.get('/', getDeals);

// POST a new deal
router.post('/', addDeal);

// PUT (update) a deal
router.put('/:id', updateDeal);

// DELETE a deal
router.delete('/:id', deleteDeal);

module.exports = router;
