import { getCustomRepository } from "typeorm";
import PiuRepository from "../repository/PiuRepository";
import {User} from "../../User/entities/entity";
import { IPiuRepository } from "../repository/IPiuRepository";

interface IPiuLikers{
    id: string;
    created_at: string;
    user_id: string;
    content: string;
    users_liked: User[];

}


interface RequestBody {
    id: string;
}

export default class ListPiusPropsService{
    async listPiuLikers({id} : RequestBody) : Promise<User[] | null>{
        const piuRepository = getCustomRepository(PiuRepository);
        //Procura no repositorio o Piu com o id pedido e retorna o array de usuarios que deram like
        const getPiu = await piuRepository.createQueryBuilder("pius")
        .leftJoinAndSelect("piu.users_liked", "users")
        .where("pius.id = :id", {id: id})
        .getOne();
        
        if( getPiu != null){
            const user = getPiu.users_liked;
            return user;

        }
        return null;
        
    }

    async listPiuComments(id : string) : Promise<User[] | null>{
        const piuRepository = getCustomRepository(PiuRepository);
        //Procura no repositorio o Piu com o id pedido e retorna o array de usuarios que deram like
        const getPiu = await piuRepository.createQueryBuilder("pius")
        .leftJoinAndSelect("pius.users_liked", "users")
        .where("pius.id = :id", {id: id})
        .getOne();
        
        if( getPiu){
            const user = getPiu.users_liked;
            return user;

        }

        return null;
        
    }
    

}