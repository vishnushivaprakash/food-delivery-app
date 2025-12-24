import React, { useEffect, useState } from 'react';
import { getCart, updateCartItem, removeFromCart, clearCart } from '../services/api';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCart = async () => {
        try {
            const data = await getCart();
            setCartItems(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const handleQuantityChange = async (id, newQty) => {
        if (newQty < 1) return;
        try {
            await updateCartItem(id, newQty);
            fetchCart();
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemove = async (id) => {
        try {
            await removeFromCart(id);
            fetchCart();
        } catch (error) {
            console.error(error);
        }
    };

    const handleClearCart = async () => {
        try {
            await clearCart();
            setCartItems([]);
        } catch (error) {
            console.error(error);
        }
    }

    const total = cartItems.reduce((acc, item) => acc + (item.foodId.price * item.quantity), 0);

    if (loading) return <div className="container">Loading...</div>;

    return (
        <div className="container">
            <h1 style={{ margin: '2rem 0' }}>Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/" style={{ color: 'var(--primary-color)' }}>Go shopping</Link></p>
            ) : (
                <div className="cart-container">
                    {cartItems.map(item => (
                        <div key={item._id} className="cart-item">
                            <div className="cart-item-info">
                                <img src={item.foodId.imageUrl} alt={item.foodId.name} className="cart-item-img" />
                                <div>
                                    <h3>{item.foodId.name}</h3>
                                    <p>${item.foodId.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="quantity-controls">
                                <button className="qty-btn" onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="qty-btn" onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                                <button className="remove-btn" onClick={() => handleRemove(item._id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="cart-total">
                        Total: ${total.toFixed(2)}
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                        <button className="btn" style={{ backgroundColor: '#7f8c8d', marginRight: '1rem' }} onClick={handleClearCart}>Clear Cart</button>
                        <button className="btn">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
