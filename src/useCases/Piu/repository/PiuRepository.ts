import { EntityRepository, Repository } from "typeorm";
import { Piu } from "../entities/entity";

@EntityRepository(Piu)

class PiuRepository extends Repository<Piu>{
    async findPiu( piu_id : string) : Promise<Piu | null>{
        const searchedPiu = await this.createQueryBuilder("pius")
        .leftJoinAndSelect("pius.likers", "users")   
        .leftJoinAndSelect("pius.users_favorited", "user")
        .leftJoinAndSelect("piu.comments", "comments")
        .where("pius.id = :id", {id: piu_id})
        .getOne();

        return searchedPiu || null;
    }
}


export default PiuRepository;