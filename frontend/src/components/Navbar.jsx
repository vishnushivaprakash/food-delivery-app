import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">FoodDelivery</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cart" className="nav-link cart-link">
                        <FaShoppingCart size={20} />
                        {/* <span className="cart-count">0</span>  -- To be implemented with Context/State */}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
