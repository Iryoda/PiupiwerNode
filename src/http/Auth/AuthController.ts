import '../../shared/config/env';
import {Response, Request} from 'express';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import FindByUsernameService from '../../useCases/User/services/FindByUsername';
import CreateUserService from '../../useCases/User/services/CreateUserService';

export default class AuthController {
    async login (request : Request, response : Response){
        const {username, password} = request.body;

        try {
            const findByUsernameService = new FindByUsernameService()
            const user = await findByUsernameService.execute(username);
        
            if( user){
                const compare = await bcrypt.compare(password, user.password)
                if(compare){
                    const token = jwt.sign({id : user.id}, process.env.APP_SECRET as string, {
                        expiresIn: '1d'
                    })
                    return response.json({user, token});
                } else {
                    throw "Password do not match";
                }
            } else {
                throw "User not found";
            }
        } catch (error) {
            return response.status(400).send({
                "error" : error
            })
        }
    }

}