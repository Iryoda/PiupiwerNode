import express from 'express';
import CommentsController from './CommentController';

const commentRoutes = express.Router();

const commentController = new CommentsController();

//POST
commentRoutes.post('/', commentController.create);

//GET
commentRoutes.get('/:id?', commentController.index);

//DELETE
commentRoutes.delete('/:id', commentController.deleteComment);
export default commentRoutes;