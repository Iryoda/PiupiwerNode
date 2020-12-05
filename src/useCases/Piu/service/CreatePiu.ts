import { getCustomRepository } from "typeorm";
import { CreatePiuDTO } from "../repository/IPiuRepository";
import PiuRepository from "../repository/PiuRepository";


export default class CreatePiuService{

    async execute({user_id, content} : CreatePiuDTO){

        const piuRepository = getCustomRepository(PiuRepository);
        const newPiu = await piuRepository.create({user_id, content});
        const piu = await piuRepository.save(newPiu);

        return piu;
    }
}