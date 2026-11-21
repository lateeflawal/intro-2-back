import {Router} from 'express';
import createUser from '../controller/user.controllers.js'
// import {getUser, createUser, updateUser, deleteUser} from '../controllers/user.controller.js';


// The router is responsible for defining the routes and endpoints of the application. It maps incoming requests to specific controller functions that handle the logic for each route. The router acts as a bridge between the client and the server, directing requests to the appropriate controllers based on the URL and HTTP method. It allows for organized and modular routing, making it easier to manage and maintain the application's endpoints.

const router = Router();

router.route('/createUser').post(createUser)

// router.get('/users/:id', getUser);
// router.post('/users', createUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;