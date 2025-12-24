import React, { useEffect, useState } from 'react';
import { getAllFood } from '../services/api';
import FoodCard from '../components/FoodCard';

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const data = await getAllFood();
                setFoods(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load food items.");
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    if (loading) return <div className="container" style={{ padding: '2rem' }}>Loading...</div>;
    if (error) return <div className="container" style={{ padding: '2rem', color: 'red' }}>{error}</div>;

    return (
        <div className="container">
            <div className="hero">
                <h1>Welcome to FoodDelivery</h1>
                <p>Order your favorite meals now!</p>
            </div>

            <div className="food-grid">
                {foods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Home;
