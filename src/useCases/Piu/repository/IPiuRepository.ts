import { User } from "../../User/entities/entity";
import { Piu } from "../entities/entity";

export interface IPiu{
	id: string;
	content: string;
	created_at: Date;
	user_id: string;
	users_liked: User[];
	users_favorited: User[];
	omments: Comment[];
}
export interface CreatePiuDTO{
	user_id: string;
	content: string;
}

export interface IPiuRepository{
	create(piu: CreatePiuDTO): Promise<any>;
	findPiu(piu_id : string) : Promise<Piu | null>;
}

