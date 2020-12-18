import { getCustomRepository } from "typeorm";
import PiuRepository from "../repository/PiuRepository";

export class DeletePiuservice{
    async execute(piu_id : string) {
        const piuRep = getCustomRepository(PiuRepository);
        const piu = await piuRep.createQueryBuilder('pius')
        .delete()
        .where('id = :id' , {id : piu_id})
        .execute();

        return;
    }
}