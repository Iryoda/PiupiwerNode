import { getCustomRepository } from "typeorm";
import PiuRepository from "../../Piu/repository/PiuRepository";
import CommentRepository from "../repository/CommentRepository";

interface commentPiuBody{
    user_id: string;
    piu_id: string;
    content: string;
}

export default class commentPiuService {
    async execute({user_id, piu_id, content} : commentPiuBody ){
        //Criamos o comment  
        const commentRepository = getCustomRepository(CommentRepository);
        const newComment = await commentRepository.create({user_id, piu_id, content});
        const comment = await commentRepository.save(newComment);
        
        //Busca o piu com id dado 
        const piuRepository =  getCustomRepository(PiuRepository);
        const searchedPiu = await piuRepository.findPiu(piu_id);

        //Adciona no vetor de comentários o comentario criado
        searchedPiu?.comments.push(comment);
        
    }
}