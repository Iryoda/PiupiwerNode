import { EntityRepository, Repository } from "typeorm";
import { Comment } from "../entities/entity";

@EntityRepository(Comment)

class CommentRepository extends Repository<Comment>{
    async findComent(comment_id : string) : Promise<Comment | null>{
        const comment = await this.createQueryBuilder('comments')
        .where('  comments.id = :id', {id : comment_id})
        .getOne();
        return comment || null;
    }

}


export default CommentRepository;