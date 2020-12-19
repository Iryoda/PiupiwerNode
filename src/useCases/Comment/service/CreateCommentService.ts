import { getCustomRepository } from "typeorm";
import { userRepository } from "../../../shared/container";
import PiuRepository from "../../Piu/repository/PiuRepository";
import UserRepository from "../../User/repository/UserRepository";
import ListUserService from "../../User/services/ListUserService";
import CommentRepository from "../repository/CommentRepository";

interface commentPiuBody{
    user_id: string;
    piu_id: string;
    content: string;
}

export default class commentPiuService {
    async execute({user_id, piu_id, content} : commentPiuBody ){
        //Busca o piu com id dado 
        const piuRepository = getCustomRepository(PiuRepository);
        const searchedPiu = await piuRepository.findPiu(piu_id);

        if(searchedPiu){
            const listUserService = new ListUserService();
            const user = await listUserService.execute(user_id);
            if( user){
                const commentRepository = getCustomRepository(CommentRepository);
                const newComment = await commentRepository.create({user_id, piu_id, content});
                const save = await commentRepository.save(newComment);
            } else {
                throw 2;
            }
        }
        else {
            throw 1;
        }
    }
}