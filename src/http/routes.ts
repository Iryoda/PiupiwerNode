import express from 'express';
import commentRoutes from './Comment/routes';
import piuRoutes from './Piu/routes';
import userRoutes from './User/routes';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/pius', piuRoutes);
routes.use('/pius/comments', commentRoutes);

export default routes;