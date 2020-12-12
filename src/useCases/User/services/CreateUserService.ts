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
            password} : IUserDTO)
        {

            const userRepository = getCustomRepository(UserRepository);
            
            const newUser = userRepository.create({
                username, 
                first_name, 
                last_name, 
                photo, 
                description, 
                age,
                password});

            const newser = await userRepository.save(newUser);


        }
}