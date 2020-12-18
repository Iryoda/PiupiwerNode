import { getCustomRepository } from "typeorm";
import { User } from "../entities/entity";
import UserRepository from "../repository/UserRepository";

export default class ListUserFollowersService{
    async execute(user_id : string) : Promise <User | null>{
        const userRep = getCustomRepository(UserRepository);    
        const user = await userRep.createQueryBuilder('users')
        .leftJoinAndSelect('users.followers', 'user_follow_user')
        .where('users.id = :id', {id: user_id})
        .getOne()

        return user || null;
    }
}