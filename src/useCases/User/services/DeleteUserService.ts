import { getCustomRepository } from "typeorm";
import UserRepository from "../repository/UserRepository";

export class DeleteUserService{
    async execute(user_id : string) {
        const userRep = getCustomRepository(UserRepository);
        const user = await userRep.createQueryBuilder('users')
        .delete()
        .where('id = :id' , {id : user_id})
        .execute();

        return;
    }
}