import User from '../models/user.model.js';

// Controllers are responsible for handling incoming requests and returning responses to the client. They act as an intermediary between the models and the views, processing data and applying business logic. They are the decision-makers that determine how to respond to a request based on the data received and the application's requirements. Controllers typically contain methods that correspond to different routes or endpoints in the application, allowing for organized and maintainable code.

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};
