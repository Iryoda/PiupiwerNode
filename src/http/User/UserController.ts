import {Request, Response} from 'express';
import bcrypt from 'bcrypt';


import CreateUserService from '../../useCases/User/services/CreateUserService';

import { DeleteUserService } from '../../useCases/User/services/DeleteUserService';
import ListUserService from '../../useCases/User/services/ListUserService';
import UserFollowService from '../../useCases/User/services/FollowService';
import ListUserFollowersService from '../../useCases/User/services/ListUserFollowers';

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
            email
            } = request.body;

        const passwordHash = await bcrypt.hash(password, 8);

        try {
            const createService = new CreateUserService();

            const user = await createService.execute(
                { username, first_name, last_name, photo, description, age, password : passwordHash, email});

            return response.status(200).json(user);
                
        } catch (error) {
            if( error == 1){
                return response.status(400).send({
                    'error' : 'username already taken'
                })
            }
            else{
                return response.status(400).send({
                    'error': error
                });
           
            }
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
                    return response.json(user);
                }
                else {
                    return response.status(200).send({"error" : "not founded"});
                }
            }        
            else {
                const users = await listUserService.execute();
        
                return response.status(200).json(users);
            }
            
            
        } catch ( error) {
            return response.status(400).send({
                "err" : error
            })
        }

    }

    async deleteUser ( request: Request, response: Response ) {

        const {user_id}= request.query;

        try 
        {   
            const deleteUserService  = new DeleteUserService();
            const userDeleted = deleteUserService.execute(user_id as string);
            return response.sendStatus(200);

        } catch ( err) {
            return response.status(400).send({
                "err" : err
            })
        }

    }

    async followUser(request: Request, response: Response){
        const {user_id} = request.params;
        const body = request.body;

        const owner_id = body.user_id as string;

        try {
            const followUserService = new UserFollowService();
            const follow = await followUserService.execute({owner_id, user_id});

            return response.sendStatus(200);

        } catch (error) {
            return response.status(400).json({
                "error" : error
            })
        }
    }

    async indexFollower(request: Request, response: Response){
        const {id} = request.params;

        try {
            const listFollowerService = new ListUserFollowersService();
            const user = await listFollowerService.execute(id);
            console.log( user);
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({
                "error" : error
            })
        }
    }
}