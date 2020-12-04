import { EntityRepository, Repository } from "typeorm";
import { Comment } from "../entities/entity";

@EntityRepository(Comment)

class CommentRepository extends Repository<Comment>{

}


export default CommentRepository;