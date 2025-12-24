import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    return (
        <div className="food-card">
            <img src={food.imageUrl} alt={food.name} className="food-img" />
            <div className="food-info">
                <h3 className="food-name">{food.name}</h3>
                <p className="food-price">${food.price.toFixed(2)}</p>
                <Link to={`/food/${food._id}`} className="btn btn-block">View Details</Link>
            </div>
        </div>
    );
};

export default FoodCard;
