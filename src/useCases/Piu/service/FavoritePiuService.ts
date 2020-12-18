import { getCustomRepository } from "typeorm";
import UserRepository from "../../User/repository/UserRepository";

import PiuRepository from "../repository/PiuRepository";

export default class FavoritePiuService{

    async execute(piu_id : string, user_id: string){
      
        const userRepository = getCustomRepository(UserRepository);
        const piuRepository = getCustomRepository(PiuRepository);

        const piu = await piuRepository.findPiu(piu_id);
        //ta feio
        if(piu != null){
            if( piu.users_favorited.length == 0){
                console.log('oi')
                const getUser = await userRepository.findUser(user_id);
                if( getUser) { 
                    const favorite = piu.users_favorited.push(getUser);
                    const save = await piuRepository.manager.save(piu);
                    return;
                }  else throw "User not found";
            }
            const getPiu = piu.users_favorited.forEach( async(user) => {
                if (user.id == user_id){ 
                    const index = piu.users_favorited.indexOf(user);
                    const deleted = delete piu.users_favorited[index];
                    const save = await piuRepository.manager.save(piu);
                    return;
                } else {
                    const getUser = await userRepository.findUser(user_id);
                    if( getUser) { 
                        const favorite = piu.users_favorited.push(getUser);
                        const save = await piuRepository.manager.save(piu);
                        return;
                    }
                    else throw "User not found";
                }
            });
    
        } else throw "Piu not found";
    }
}

