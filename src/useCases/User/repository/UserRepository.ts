import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/entity";

@EntityRepository(User)

class UserRepository extends Repository<User>{

    async index( user_id : string ) : Promise<User | null>{
        const getUser = await this.createQueryBuilder('users')
        .leftJoinAndSelect('pius', 'users_favorited', 'users_liked')
        .where('id = :id', {id : user_id})
        .getOne();
        
        return getUser || null;
        
    }
}


export default UserRepository;