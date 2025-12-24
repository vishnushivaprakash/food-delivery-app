import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllFood = async () => {
    try {
        const response = await axios.get(`${API_URL}/food`);
        return response.data;
    } catch (error) {
        console.error("Error fetching food:", error);
        throw error;
    }
};

export const getFoodById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/food/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching food details:", error);
        throw error;
    }
};

export const getCart = async () => {
    try {
        const response = await axios.get(`${API_URL}/cart`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
};

export const addToCart = async (foodId, quantity = 1) => {
    try {
        const response = await axios.post(`${API_URL}/cart`, { foodId, quantity });
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
};

export const updateCartItem = async (id, quantity) => {
    try {
        const response = await axios.put(`${API_URL}/cart/${id}`, { quantity });
        return response.data;
    } catch (error) {
        console.error("Error updating cart:", error);
        throw error;
    }
};

export const removeFromCart = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/cart/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error removing from cart:", error);
        throw error;
    }
};

export const clearCart = async () => {
    try {
        const response = await axios.delete(`${API_URL}/cart`);
        return response.data;
    } catch (error) {
        console.error("Error clearing cart:", error);
        throw error;
    }
}
