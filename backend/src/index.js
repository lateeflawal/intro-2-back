import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';

// console.log("1. Code reached the bottom!");

// dotenv.config();
// connectDB();
// const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("Hello! My backend is working!");
});

app.get('/api/test', (req, res) => {
    res.json({ message: "Success!", status: "Healthy" });
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});




// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// dotenv.config() is used to load environment variables from a .env file into process.env. This allows you to keep sensitive information, such as database connection strings and API keys, out of your source code and instead store them in a separate configuration file.
// dotenv.config({ path: './.env' });

// const startServer = async () => {
//   try {
//     await connectDB(); // Connect to the database

//     app.on('error', (err) => {
//       console.error('Server error:', err);
//       throw err; // Rethrow the error to be caught by the outer try-catch     
//       });
//       app.listen(process.env.PORT || 5000, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     process.exit(1); // Exit the process with an error code
//   }
// };

// startServer();