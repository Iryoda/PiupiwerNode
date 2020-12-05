import { getCustomRepository } from "typeorm";
import { Piu } from "../entities/entity";
import PiuRepository from "../repository/PiuRepository";

export default class ListClassService
{
    public async excute(): Promise<Piu[] | null>{
        const piuRepository = getCustomRepository(PiuRepository);

        const pius = await piuRepository.createQueryBuilder("pius")
        .leftJoinAndSelect("pius.user_id", "user")
        .leftJoinAndSelect("pius.likers", "user")   
        .leftJoinAndSelect("pius.users_favorited", "user")
        .leftJoinAndSelect("pius.comments", "comments")
        .getMany();

        return pius;
    }

}   