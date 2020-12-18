import express from 'express';
import PiuController from './piuController';

const piuRoutes = express.Router();

const piuController = new PiuController();
//POST
piuRoutes.post('/', piuController.create);
piuRoutes.post('/like/:id', piuController.likePius);
piuRoutes.post('/favorite/:id', piuController.favoritePiu);

//GET
piuRoutes.get('/:id?', piuController.index);
piuRoutes.get('/comments/:id', piuController.listComments);

//DELETE
piuRoutes.delete('/:id', piuController.delete);

export default piuRoutes;