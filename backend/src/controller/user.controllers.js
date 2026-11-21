import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

// Controllers are responsible for handling incoming requests and returning responses to the client. They act as an intermediary between the models and the views, processing data and applying business logic. They are the decision-makers that determine how to respond to a request based on the data received and the application's requirements. Controllers typically contain methods that correspond to different routes or endpoints in the application, allowing for organized and maintainable code.

// const getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(404).json({ message: 'User not found' });
//   }
// };


// const createUser = async (req, res, next) => {
//     console.log("Received Body:", req.body); // Add this

//   try {
//     const {username, email, password} = req.body

//     // Basic Validation
//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'username, email and password are required' });
//     }
//     // Check if user exists already
//     const existing = await User.findOne({email: email.toLowerCase()});
//     if (existing) return res.status(400).json({message: "User already exists!"});
//    // Now let's create user
//    const user = await User.create({
//     username,
//     email: email.toLowerCase(),
//     password: password,
//     loggedIn: false
//    })
//    res.status(201).json({
//     message: "User registered",
//     user: {id: user._id, email: user.email, username: user.username}
//    })
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error', error: error });
//   }
// };


// Then create the user
// const user = await User.create({
//     username,
//     email: email.toLowerCase(),
    
// });

const createUser = async (req, res, next) => {
    console.log("Received Body:", req.body);

    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required' });
        }

        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(400).json({ message: "User already exists!" });
        }

        console.log("About to create user..."); // NEW LOG

        // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: hashedPassword // Save the hashed version!
        });

        console.log("User created successfully!"); // NEW LOG

        res.status(201).json({ message: "User created", user });

    } catch (error) {
        // THIS IS THE MOST IMPORTANT PART
        console.error("❌ CATCH BLOCK ERROR:", error); 
        res.status(500).json({ 
            message: "Database Error", 
            specificError: error.message 
        });
    }
};

export default createUser

// NB User means user-model, while user wt small 'u' means one user
