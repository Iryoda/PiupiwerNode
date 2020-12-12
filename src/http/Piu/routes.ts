import express from 'express';
import PiuController from './piuController';

const piuRoutes = express.Router();

const piuController = new PiuController();
//POST
piuRoutes.post('/', piuController.create);

//GET
piuRoutes.get('/:id?', piuController.index);
piuRoutes.get('/like/:id', piuController.likePius);
piuRoutes.get('/comments/:id', piuController.listComments);


export default piuRoutes;