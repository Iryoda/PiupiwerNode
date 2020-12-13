import { getCustomRepository } from "typeorm";
import PiuRepository from "../../Piu/repository/PiuRepository";

interface RequestBody{
    piu_id: string;
    comment_id: string;
    user_id: string;
}

export default class DeleteCommentService{
    //Poderia fazer o delete comment procurando o id dele
    //Porém como a quantidade de comentarios em uma aplicação real
    //é menor que a quantidade de Piu decidi por fazer a procura 
    //do piu e deletar ele por lá

    async execute({piu_id, comment_id, user_id} : RequestBody){
        const piuRepository = getCustomRepository(PiuRepository);
        const piu = await piuRepository.findOne({
            relations: ['comments'],
            where: {id: piu_id}
        });
        if(piu){
            const searchComment = piu?.comments.forEach(async(comment) => {
                if( comment.id == comment_id && comment.user_id == user_id){
                    const index = piu.comments.indexOf(comment);
                    delete piu.comments[index];
                    const save = await piuRepository.save(piu);
                    return;
                } else {
                    console.log('Não foi possivel deletar comentario');
                    return;
            }})
        }
    }
}
