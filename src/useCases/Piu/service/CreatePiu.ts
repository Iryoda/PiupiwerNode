import { getCustomRepository } from "typeorm";
import { Piu } from "../entities/entity";
import PiuRepository from "../repository/PiuRepository";

interface RequestBody{
    user_id: string;
    content: string;

}

export default class CreatePiuService{

    async execute({user_id, content}: RequestBody ) : Promise<Piu | null> {
        const piuRepository = getCustomRepository(PiuRepository);
        const newPiu = piuRepository.create({user_id, content});
        const piu = await piuRepository.save(newPiu);
        
        return piu;
    }
}