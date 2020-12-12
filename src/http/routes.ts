import express from 'express';
import piuRoutes from './Piu/routes';
import userRoutes from './User/routes';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/pius', piuRoutes);

export default routes;