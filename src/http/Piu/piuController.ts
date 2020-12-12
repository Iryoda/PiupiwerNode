import {Response, Request, response, json} from 'express';

import bcrypit from 'bcrypt';

import { piuRepository } from '../../shared/container';
import ListPiuService from '../../useCases/Piu/service/ListPiuService';
import CreatePiuService from '../../useCases/Piu/service/CreatePiu';
import LikePiuService from '../../useCases/Piu/service/LikePiu';
import ListPiusPropsService from '../../useCases/Piu/service/ListPiuProps';

export default class PiuController{
    async index( request: Request, response: Response){
        const {id} = request.params;

        const piu_id = id as string;
        
        try {  
            const listPiu = new ListPiuService();
            if( piu_id){
                const piu = await listPiu.execute(piu_id);

                return response.json(piu).status(200);
            }
            
            const pius = await listPiu.execute();
            return response.json(pius);

        } catch (error) {
            return response.status(400).send({
                "err" : error
            })
        }

    }

    async create ( request: Request, response: Response){

        const {user_id, content} = request.body;

        try {
            const createPiu = new CreatePiuService();
            const newPiu = createPiu.execute({user_id, content});

            return response.json(newPiu);

        } catch (error) {
            
        }
    }

    async likePius ( request: Request, response: Response){
        const {piu_id} = request.params;
        const {user_id} = request.body;

        try {
            const likePiusService = new LikePiuService();
            const likePiu = await likePiusService.execute(piu_id, user_id);
            
            return response.status(200);
        } catch (error) {
            return response.status(400).send({
                "Error": error
            })
        }
    }

    async listComments(request: Request, response: Response){
        const { piu_id } = request.params;
        
        try{
            const listCommentsService  = new ListPiusPropsService();

            const comments = await listCommentsService.listPiuComments(piu_id);

            return response.json(comments);
        }catch ( err ){
            return response.send({
                "error" : err
            })
        }

    }
}