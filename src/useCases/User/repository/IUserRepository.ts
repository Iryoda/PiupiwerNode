import { Piu } from "../../Piu/entities/entity";

export interface IUserDTO
{
    id?: string;
	username: string;
	first_name: string;
	last_name: string;
	photo: string;
	description: string;
	age: string;
	password: string;
	email: string;
	
    pius?: Piu[];
    
	liked_pius?: Piu[];
	favorited_pius?: Piu[];
	commented_pius?: Piu[];

}


export interface IUserRepository{
	create({
		username,
		first_name,
		last_name,
		photo,
		description,
		age,
		password} : IUserDTO) : null;
}