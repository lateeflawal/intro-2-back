import express from 'express';
import userRouter from './routes/user.route.js'
// import postRouter from './routes/post.route.js'

const app = express(); // Create an instance of the Express application

// Middleware to parse JSON request bodies
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// route declaration
app.use('/api/v1/users', userRouter);
// app.use('/api/v1/posts', postRouter);

// Example route: http://localhost:5000/api/v1/users/register

// app.use((err, req, res, next) => {
//     console.error("🔥 BACKEND ERROR:", err); // Look at your terminal for this!
    
//     res.status(500).json({
//         message: err.message || "Unknown error",
//         // Stringify the error so HTTPie can read it
//         details: JSON.stringify(err, Object.getOwnPropertyNames(err)) 
//     });
// });

// app.use((err, req, res, next) => {
//     // Print the full error to your VS Code terminal
//     console.error("🔥 BACKEND ERROR:", err); 
    
//     // Send the real message back to HTTPie
//     res.status(500).json({
//         message: err.message || "Internal server error",
//         error: err // This will send the full error object
//     });
// });

// app.use((err, req, res, next) => {
//     // 1. Log it loudly to the terminal
//     console.error("🔥 BACKEND ERROR:", err);
    
//     // 2. Send the actual message back to HTTPie
//     res.status(err.status || 500).json({
//         message: err.message || "Internal server error",
//         error: err.name || "Unknown Error"
//     });
// });


export default app; // Export the Express application instance
