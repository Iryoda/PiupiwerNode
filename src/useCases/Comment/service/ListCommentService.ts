import { getCustomRepository } from "typeorm";
import { Comment } from "../entities/entity";
import CommentRepository from "../repository/CommentRepository";

export default class ListCommentService {
    async execute(id? : string) : Promise<Comment[] | Comment | null>{

        const commentsRepository = getCustomRepository(CommentRepository);

        if( id){
            const comment = await commentsRepository.findComent(id);
            return comment;
        } else {
            const comments = await commentsRepository.find();
            return comments;
        }
    }
}