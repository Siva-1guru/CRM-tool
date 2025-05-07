// const express = require('express');
// const router = express.Router();
// const Product = require('./modules/product');

// // Get all products
// router.get('/', async (req, res) => {
//     const products = await Product.find();
//     res.json(products);
// });

// // Create a new product
// router.post('/', async (req, res) => {
//     const { title, description, price, image } = req.body;
//     const newProduct = new Product({ title, description, price, image });
//     await newProduct.save();
//     res.status(201).json(newProduct);
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const { title, description, price, image } = req.body;
  try {
    const newProduct = new Product({ title, description, price, image });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
