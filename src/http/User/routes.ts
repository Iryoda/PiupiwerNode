import express from 'express';
import { DEFAULT_ECDH_CURVE } from 'tls';
import routes from '../routes';
import UserController from './UserController';

const userRoutes = express.Router();

const userController = new UserController;

userRoutes.post('/', userController.create);
userRoutes.get('/', userController.index);
userRoutes.delete('/', userController.deleteUser);

export default userRoutes;
