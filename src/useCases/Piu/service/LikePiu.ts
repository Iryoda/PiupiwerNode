import { getCustomRepository } from "typeorm";
import UserRepository from "../../User/repository/UserRepository";

import PiuRepository from "../repository/PiuRepository";

export default class LikePiuService{

    async execute(piu_id : string, user_id: string){
      
        const userRepository = getCustomRepository(UserRepository);
        const piuRepository = getCustomRepository(PiuRepository);

        const piu = await piuRepository.findPiu(piu_id);
        //ta feio
        if(piu != null){
            if( piu.users_liked.length == 0){
                const getUser = await userRepository.findUser(user_id);
                if( getUser) { 
                    const like = piu.users_liked.push(getUser);
                    const save = await piuRepository.manager.save(piu);
                    return;
                }  else throw "User not found";
            }
            const getPiu = piu.users_liked.forEach( async(user) => {
                if (user.id == user_id){ 
                    const index = piu.users_liked.indexOf(user);
                    const deleted = delete piu.users_liked[index];
                    const save = await piuRepository.manager.save(piu);
                    return;
                } else {
                    const getUser = await userRepository.findUser(user_id);
                    if( getUser) { 
                        const like = piu.users_liked.push(getUser);
                        const save = await piuRepository.manager.save(piu);
                        return;
                    }
                    else throw 1;
                }
            });
    
        } else throw 2;
    }
}

