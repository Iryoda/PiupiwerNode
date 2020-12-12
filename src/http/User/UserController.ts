import {Request, Response} from 'express';
import bcrypt from 'bcrypt';


import CreateUserService from '../../useCases/User/services/CreateUserService';

import { DeleteUserService } from '../../useCases/User/services/DeleteUserService';
import ListUserService from '../../useCases/User/services/ListUserService';

export default class UserController{

    async create(request: Request, response: Response){

        const {
            username ,
            first_name,
            last_name,
            photo,
            description,
            age,
            password,
            }   = request.body;

        const passwordHash = await bcrypt.hash(password, 8);

        try {
            const createService = await new CreateUserService();

            const user = await createService.execute(
                { username, first_name, last_name, photo, description, age, password : passwordHash});

            return response.status(200).send({"tudo" : "massa"});
                
        } catch (err) {
            return response.status(400).json({
                error: err
            });
        }
         
    }

    async index ( request: Request, response: Response ) {

        const {id} = request.params;

        const user_id  = id as string;

        try {
            const listUserService  = new ListUserService();

            if(user_id){
                const user = await listUserService.execute(user_id as string);

                if (user) {
                    console.log("ok");
                    return response.json(user);
                }
                else {
                    console.log("fail");
                    return response.status(200).send({"error" : "not founded"});
                }
            }        
            else {
                console.log('ok');
                const users = await listUserService.execute();
        
                return response.status(200).json(users);
            }
            
            
        } catch ( err) {
            return response.status(400).send({
                "err" : err
            })
        }

    }

    async deleteUser ( request: Request, response: Response ) {

        const {user_id}= request.query;

        try 
        {   
            const deleteUserService  = new DeleteUserService();
            const userDeleted = deleteUserService.execute(user_id as string);
            return response.status(200).send({"deletado" : "ok!"});

        } catch ( err) {
            return response.status(400).send({
                "err" : err
            })
        }

    }
}