import { getCustomRepository } from "typeorm";
import PiuRepository from "../../Piu/repository/PiuRepository";
import CommentRepository from "../repository/CommentRepository";

interface RequestBody{
    comment_id: string;
    user_id: string;
}

export default class DeleteCommentService{
    //Poderia fazer o delete comment procurando o id dele
    //Porém como a quantidade de comentarios em uma aplicação real
    //é maior que a quantidade de Piu decidi por fazer a procura 
    //do piu e deletar ele por lá

    async execute({comment_id, user_id} : RequestBody){
        const commentRepository = getCustomRepository(CommentRepository)
        const comment = await commentRepository.findComent(comment_id);
        if ( comment && comment.user_id == user_id){
            const commentDel = await commentRepository.delete(comment);
            return
        }

        throw "Comment not found";
    }
}
