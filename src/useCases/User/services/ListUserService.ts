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
            const users = await userRep.createQueryBuilder('users')
            .leftJoinAndSelect('users.pius','pius' )
            .leftJoinAndSelect('users.comments', 'comments')
            .leftJoinAndSelect('users.liked_pius', 'users_liked_pius_pius')
            .leftJoinAndSelect('users.favorited_pius', 'users_favorited_pius_pius')
            .leftJoinAndSelect('users.following', 'user_follow_user')
            .getMany();
            
            return users;
        }
        
    }
}