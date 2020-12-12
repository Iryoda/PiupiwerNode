import { getCustomRepository } from "typeorm";
import { userRepository } from "../../../shared/container";
import { User } from "../entities/entity";
import UserRepository from "../repository/UserRepository";

export default class ListUserService {
    async execute(user_id? : string) : Promise<User | User[] | null>{
        
        const userRep = getCustomRepository(UserRepository);

        if(user_id){
            const user = await userRep.index(user_id);
            return user;
        } else {
            const user = await userRep.createQueryBuilder('user')
            .leftJoinAndSelect('pius', 'liked_pius', 'favorited_pius')
            .getMany();

            return user;
        }
    
    }
}