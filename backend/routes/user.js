import express from 'express';
import userControllers from '../controllers/user.js';

const userRoute = express.Router();

userRoute.post('/register', userControllers.userRegister);
userRoute.post('/login', userControllers.userLogin);

export default userRoute;
