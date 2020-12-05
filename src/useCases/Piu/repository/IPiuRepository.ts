import { Piu } from "../entities/entity";

export interface IPiuRepository{
		content: string;
		user_id: string;
}
export interface CreatePiuDTO{
	user_id: string;
	content: string;
}

export interface IPiuRepository{
	create(piu: CreatePiuDTO): Promise<any>;
	findPiu(piu_id : string) : Promise<Piu | null>;
}

