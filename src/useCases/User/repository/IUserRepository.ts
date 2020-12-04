import { Piu } from "../../Piu/entities/entity";

export interface IUserRepository
{
    id: string;
	username: string;
	first_name: string;
	second_name: string;
	photo: string;
	description: string;
	
    pius: Piu[];
    
	liked_pius: Piu[];
	favorited_pius: Piu[];
	commented_pius: Piu[];

}