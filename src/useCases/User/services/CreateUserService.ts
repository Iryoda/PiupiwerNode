import { getCustomRepository } from "typeorm";
import { IUserDTO } from "../repository/IUserRepository";
import UserRepository from "../repository/UserRepository";

export default class CreateUserService {
    
    async execute({
            username,
            first_name,
            last_name,
            photo,
            description,
            age,
            password,
            email} : IUserDTO)
        {

            const userRepository = getCustomRepository(UserRepository);

            const checkUser = await userRepository.findOne({
                where: {username : username}
            })
            const checkEmail = await userRepository.findOne({
                where: {email : email}
            })

            if(!checkUser && !checkEmail){
                const newUser = await userRepository.create({
                    username, 
                    first_name, 
                    last_name, 
                    photo, 
                    description, 
                    age,
                    password,
                    email});
                
                const save = await userRepository.save(newUser);
                return;
            }
            else {
                throw 1;
            }
        }
          
}