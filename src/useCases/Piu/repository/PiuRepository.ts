import { EntityRepository, Repository } from "typeorm";
import { Piu } from "../entities/entity";

@EntityRepository(Piu)

class PiuRepository extends Repository<Piu>{
    async findPiu( piu_id : string) : Promise<Piu | null>{
        const searchedPiu = await this.createQueryBuilder("pius")
        .leftJoinAndSelect("pius.users_liked", "users_liked_pius_pius")   
        .leftJoinAndSelect("pius.users_favorited", "users_favorited_pius_pius")
        .leftJoinAndSelect("pius.comments", "comments")
        .where("pius.id = :id", {id: piu_id})
        .getOne();

        return searchedPiu || null;
    }
}


export default PiuRepository;