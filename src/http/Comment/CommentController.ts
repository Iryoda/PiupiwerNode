import {json, Request, Response} from 'express';
import commentPiuService from '../../useCases/Comment/service/CreateCommentService';
import ListCommentService from '../../useCases/Comment/service/ListCommentService';

export default class CommentsController{
    async create(request:Request, response: Response){
        const query = request.query ;

        const user_id = query.user_id as string;
        const piu_id = query.piu_id as string;
        const content = query.content as string;

        try {
            const createCommentService = new commentPiuService();
            const comment = createCommentService.execute({user_id, piu_id, content});

            return response.status(200).send({"tudo" : "massa"})

        } catch (err) {
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

}