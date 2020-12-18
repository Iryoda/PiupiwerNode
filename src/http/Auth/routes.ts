import express from 'express';
import UserController from '../User/UserController';
import AuthController from './AuthController';

const authRoutes = express.Router();

const authController = new AuthController();
const userController = new UserController();
//POST
authRoutes.post('/login', authController.login);

//GET
authRoutes.post('/register', userController.create);

export default authRoutes;