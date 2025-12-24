const Food = require('../models/Food');

// Get all food items
const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find({});
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get food by ID
const getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (food) {
            res.json(food);
        } else {
            res.status(404).json({ message: 'Food not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add new food item (for seeding/admin)
const addFood = async (req, res) => {
    try {
        const { name, price, description, category, imageUrl } = req.body;
        const newFood = new Food({
            name,
            price,
            description,
            category,
            imageUrl
        });
        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllFood, getFoodById, addFood };
