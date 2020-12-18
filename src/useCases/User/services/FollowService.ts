import { getCustomRepository } from "typeorm";
import UserRepository from "../repository/UserRepository";

interface requestBody{
    owner_id: string;
    user_id: string;
}

export default class UserFollowService {
    async execute({owner_id, user_id } : requestBody){
        //Veriifcar se usarios existem!
        const userRepository = getCustomRepository(UserRepository);
        const owner_user = await userRepository.findUser(owner_id);
        const second_user = await userRepository.findUser(user_id);
        console.log(owner_user);

        if( owner_user && second_user){
                if( owner_user.following.length == 0){
                    owner_user.following.push(second_user);
                    const save = await userRepository.manager.save(owner_user);
                    return;
                }
                const checkfollowing = owner_user.following.forEach(async (user)=>{
                    if( user.id == user_id){
                        const index = owner_user.following.indexOf(user);
                        delete owner_user.following[index];
                        const save = await userRepository.manager.save(owner_user);
                        return;
                    } else {
                        owner_user.following.push(second_user);
                        const save = await userRepository.manager.save(owner_user);
                        return;
                    }
                })
               
        } else {
            throw "user not found"; 
        }

    }
    
}