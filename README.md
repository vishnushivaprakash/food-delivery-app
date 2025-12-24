# Food Delivery MERN App

A full-stack Food Delivery application built with React, Node.js, Express, and MongoDB.

## Project Structure
- **/backend**: Express API, Mongoose Models, Controllers, and Seeder script.
- **/frontend**: React application (Vite template) with Vanilla CSS.

## Getting Started

### 1. Database Configuration
1. Go to `backend/.env`.
2. Replace `YOUR_PASSWORD_HERE` in the `MONGODB_URI` with your actual MongoDB Atlas password.
3. Ensure your IP address is whitelisted in your MongoDB Atlas Network Access settings.

### 2. Run the Backend
```bash
cd backend
npm install
npm run seed  # To populate initial food items
npm run dev   # Starts server with nodemon
```

### 3. Run the Frontend
```bash
cd frontend
npm install
npm run dev    # Starts React dev server
```

## Features
- **Home Page**: Browse food items fetched from MongoDB.
- **Food Details**: Detailed view of each item with quantity selection.
- **Cart System**: Add/remove items and update quantities (stored in DB).
- **Responsive Design**: Mobile-friendly UI using Vanilla CSS.
