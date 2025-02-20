import {Request, Response} from 'express';
import commentPiuService from '../../useCases/Comment/service/CreateCommentService';
import DeleteCommentService from '../../useCases/Comment/service/DeleteCommentService';
import ListCommentService from '../../useCases/Comment/service/ListCommentService';

export default class CommentsController{
    async create(request:Request, response: Response){
        const {id} = request.params;
        const body = request.body ;

        const user_id = body.user_id as string;
        const piu_id = id as string;
        const content = body.content as string;

        try {
            const createCommentService = new commentPiuService();
            const comment = createCommentService.execute({user_id, piu_id, content});

            return response.sendStatus(200);

        } catch (err) {
            if( err = 1){
                return response.status(404).send({
                    error : "User not found"
                })
            }
            if( err = 2){
                return response.status(404).send({
                    error : "Piu not found"
                })
            }
            return response.send({
                "error" : err
            })
        }
    }
    
    async index( request: Request, response: Response){
        const {id} = request.params;
        
        try {
            const listComment = new ListCommentService();

            if(id){
                const comment = await listComment.execute(id);
                return response.json(comment);
            }
            else{
                const comments = await listComment.execute()
                return response.json(comments);
            }
        } catch (err) {
            return response.status(400).send({
                "error" : err
            })
        }

    }

    async deleteComment( request: Request, response: Response){
        const { id } = request.params;
        const ids = request.body;
        
        const comment_id = id as string;
        const user_id = ids.user_id as string;

        try {
            const deleteComment = new DeleteCommentService();
            const comment = await deleteComment.execute({comment_id, user_id});
            return response.sendStatus(200);
            
        } catch (err) {
            if( err == 1){
                return response.status(404).send({
                    error : "Comment not found"
                })
            }

            if( err == 2){
                return response.status(402).send({
                    error : "User do not match"
                })
            }
            return response.status(400).send({
                "error" : err
            })
        }

    }

}