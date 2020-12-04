import { User } from "../../User/entities/entity";

export interface IPiuRepository{
    id: string;
	content: string;
	created_at: string;
	
    user_id: string;
    
	users_like: User[];
	user_favorited: User[];
	comments: Comment[];	
}

