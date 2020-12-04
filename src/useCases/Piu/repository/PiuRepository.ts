import { EntityRepository, Repository } from "typeorm";
import { Piu } from "../entities/entity";

@EntityRepository(Piu)

class PiuRepository extends Repository<Piu>{

}


export default PiuRepository;