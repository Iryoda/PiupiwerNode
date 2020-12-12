import { getCustomRepository } from "typeorm";
import { Piu } from "../entities/entity";
import PiuRepository from "../repository/PiuRepository";

export default class ListPiuService
{
    public async execute(id? : string): Promise<Piu[] | null | Piu>{
        const piuRepository = getCustomRepository(PiuRepository);

        if( id ){
            const piu = await piuRepository.findPiu(id);
            return piu || null;
        }
        const pius = await piuRepository.createQueryBuilder("pius")
        .leftJoinAndSelect("pius.likers", "user")   
        .leftJoinAndSelect("pius.users_favorited", "user")
        .leftJoinAndSelect("pius.comments", "comments")
        .getMany();

        return pius || null;
    }

}   