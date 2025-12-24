const Cart = require('../models/Cart');
const Food = require('../models/Food');

// Get cart items with food details
const getCart = async (req, res) => {
    try {
        const cartItems = await Cart.find({}).populate('foodId');
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add item to cart or update quantity
const addToCart = async (req, res) => {
    try {
        const { foodId, quantity = 1 } = req.body;

        let cartItem = await Cart.findOne({ foodId });

        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            cartItem = new Cart({ foodId, quantity });
            await cartItem.save();
        }
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        if (quantity < 1) {
            await Cart.findByIdAndDelete(id);
            return res.json({ message: 'Item removed' });
        }

        const updatedItem = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Clear cart
const clearCart = async (req, res) => {
    try {
        await Cart.deleteMany({});
        res.json({ message: 'Cart cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = { getCart, addToCart, updateCartItem, removeFromCart, clearCart };
