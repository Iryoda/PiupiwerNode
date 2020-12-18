import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/entity";

@EntityRepository(User)

class UserRepository extends Repository<User>{

    async findUser( user_id : string ) : Promise<User | null>{
        const getUser = await this.createQueryBuilder('users')
        .leftJoinAndSelect('users.pius', 'pius')
        .leftJoinAndSelect('users.comments', 'comments')
        .leftJoinAndSelect('users.liked_pius', 'users_liked_pius_pius')
        .leftJoinAndSelect('users.favorited_pius', 'users_favorited_pius_pius')
        .leftJoinAndSelect('users.following', 'user_follow_user')
        .where('users.id = :id', {id : user_id})
        .getOne();

        return getUser || null;
        
    }

}


export default UserRepository;