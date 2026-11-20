import express from 'express';


const app = express(); // Create an instance of the Express application

// Middleware to parse JSON request bodies
app.use(express.json());

export default app; // Export the Express application instance