import express from 'express';
import { send } from 'process';import piuRoutes from './Piu/routes';
import userRoutes from './User/routes';

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/pius', piuRoutes);

export default routes;