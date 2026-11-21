import mongoose, {schema} from "mongoose";


// Models are responsible for defining the structure of the data and interacting with the database. They provide an abstraction layer that allows developers to work with data in a more intuitive way, without having to write complex database queries. Models typically include methods for creating, reading, updating, and deleting data, as well as validation rules to ensure that the data being stored is accurate and consistent.

// The userSchema defines the structure of the user documents in the MongoDB collection. It specifies the fields, their data types, and validation rules. The schema ensures that each user document adheres to the defined structure, providing consistency and integrity to the data stored in the database.
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100,
    },
    // {
    //     timestamps: true
    // }
});

const User = mongoose.model("User", userSchema);
export default User;
