import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFoodById, addToCart } from '../services/api';

const FoodDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const data = await getFoodById(id);
                setFood(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchFood();
    }, [id]);

    const handleAddToCart = async () => {
        try {
            await addToCart(food._id, quantity);
            alert('Added to cart!');
            navigate('/cart');
        } catch (error) {
            alert('Failed to add to cart');
        }
    };

    if (loading) return <div className="container">Loading...</div>;
    if (!food) return <div className="container">Food not found</div>;

    return (
        <div className="container">
            <div className="food-details-container">
                <img src={food.imageUrl} alt={food.name} className="detail-img" />
                <div className="detail-info">
                    <span className="detail-category">{food.category}</span>
                    <h1 style={{ marginBottom: '1rem' }}>{food.name}</h1>
                    <p style={{ marginBottom: '1rem' }}>{food.description}</p>
                    <h2 className="food-price" style={{ marginBottom: '2rem' }}>${food.price.toFixed(2)}</h2>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            style={{ padding: '5px', width: '60px' }}
                        />
                    </div>

                    <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
