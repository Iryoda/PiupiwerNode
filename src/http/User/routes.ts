import express from 'express';
import { DEFAULT_ECDH_CURVE } from 'tls';
import routes from '../routes';
import UserController from './UserController';

const userRoutes = express.Router();

const userController = new UserController;
//POST
userRoutes.post('/', userController.create);
userRoutes.post('/follow/:user_id', userController.followUser);

//GET
userRoutes.get('/:id?', userController.index);
userRoutes.get('/followers/:id', userController.indexFollower);

//DELETE
userRoutes.delete('/', userController.deleteUser);

export default userRoutes;
