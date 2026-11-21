import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import { DB_NAME } from './constant.js';

// The connectDB function establishes a connection to the MongoDB database using Mongoose. It retrieves the MongoDB connection URI from the environment variables (process.env.MONGO_URI) and attempts to connect to the database. If the connection is successful, it logs the host of the connected database. If there is an error during the connection process, it logs the error and exits the process with a non-zero status code, indicating a failure to connect to the database.

dotenv.config();


// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/' + DB_NAME);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1);
//   }
// };

// export default connectDB;

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
//     console.log(conn.connection.host);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1);
//   }
// };

// export default connectDB;

// ✅ Correct Structure
// const startServer = async () => {
//     try {
//         await connectDB(); // Only called here
//         app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//     } catch (error) { 'Error connecting to MongoDB:', error }
// };

// startServer(); // Only called once

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
