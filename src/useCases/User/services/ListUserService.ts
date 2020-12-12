import { getCustomRepository } from "typeorm";
import { User } from "../entities/entity";
import UserRepository from "../repository/UserRepository";

export default class ListUserService {
    async execute(user_id? : string) : Promise<User | User[] | null>{

        const userRep = getCustomRepository(UserRepository);

        if(user_id){
            const user = await userRep.findUser(user_id);
            console.log(user);
            return user;
        } else {
            const users = await userRep.find({
                relations: ['pius', 'liked_pius','comments']
            })

            console.log(users);
            return users;
        }
        
    }
}