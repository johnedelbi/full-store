import express from 'express';
import userControllers from '../controllers/user.js';

const userRoutes = express.Router();

userRoutes.post('/register', userControllers.userRegister);
userRoutes.post('/login', userControllers.userLogin);

export default userRoutes;
