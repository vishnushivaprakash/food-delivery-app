require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./models/Food');
const connectDB = require('./config/db');

const sampleFoods = [
    {
        name: "Margherita Pizza",
        price: 12.99,
        description: "Classic delight with 100% real mozzarella cheese.",
        category: "Pizza",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Cheeseburger",
        price: 8.50,
        description: "Juicy grilled chicken patty with fresh lettuce and cheese.",
        category: "Burger",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Pasta Alfredo",
        price: 10.99,
        description: "Creamy pasta with grilled chicken and parmesan.",
        category: "Pasta",
        imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Sushi Platter",
        price: 18.00,
        description: "Assorted fresh sushi rolls with wasabi and soy sauce.",
        category: "Sushi",
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Chocolate Cake",
        price: 6.50,
        description: "Rich chocolate layer cake with creamy frosting.",
        category: "Dessert",
        imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

const seedData = async () => {
    try {
        await connectDB();

        await Food.deleteMany({});
        console.log('Food collection cleared');

        await Food.insertMany(sampleFoods);
        console.log('Sample food data imported');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
