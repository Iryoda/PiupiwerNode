import { getCustomRepository, RelationQueryBuilder } from "typeorm";
import UserRepository from "../../User/repository/UserRepository";

import PiuRepository from "../repository/PiuRepository";

export default class LikePiuService{

    async execute(piu_id : string, user_id: string){
      
        const userRepository = getCustomRepository(UserRepository);
        const piuRepository = getCustomRepository(PiuRepository);
        
    
        const getPiu = await piuRepository.createQueryBuilder('pius')
        .leftJoinAndSelect('pius.user_liked', 'users' )
        .where('id = :id', {id: piu_id})
        .getOne();

        if( getPiu){
            const piu = getPiu.users_liked.forEach( async(user) => {
                if (user.id == user_id){
                    const index = getPiu.users_liked.indexOf(user);
                    delete getPiu.users_liked[index];
                    const save = await piuRepository.save(getPiu);
                    return;
                } else {
                    const gettedUser = await userRepository.findUser(user_id);
                    if( gettedUser != null) { 
                        getPiu.users_liked.push(gettedUser);
                        const save = await piuRepository.save(getPiu);
                    }
                    else return;
                }
            });
    
        }
        
    }
}