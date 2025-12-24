const express = require('express');
const router = express.Router();
const { getAllFood, getFoodById, addFood } = require('../controllers/foodController');

router.get('/', getAllFood);
router.get('/:id', getFoodById);
router.post('/', addFood); // Admin route ideally

module.exports = router;
