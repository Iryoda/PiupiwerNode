import { getCustomRepository } from "typeorm";
import { User } from "../entities/entity";
import UserRepository from "../repository/UserRepository";

export default class FindByUsernameService{
    async execute(username : string) : Promise <User | null>{
        const userRep = getCustomRepository(UserRepository);
        const getUser = await userRep.createQueryBuilder('users')
        .addSelect('users.password')
        .where('username = :username', {username : username})
        .getOne()

        console.log(getUser);
        return getUser || null;
    }
}