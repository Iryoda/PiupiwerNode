import express from 'express';
import authRoutes from './Auth/routes';
import commentRoutes from './Comment/routes';
import piuRoutes from './Piu/routes';
import userRoutes from './User/routes';
import { auth } from './Middleware/auth';

const routes = express.Router();

routes.use('/auth/', authRoutes)

routes.use(auth);

routes.use('/users', userRoutes);
routes.use('/pius', piuRoutes);
routes.use('/comments', commentRoutes);

export default routes;