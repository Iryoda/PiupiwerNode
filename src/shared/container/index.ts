import { getCustomRepository } from "typeorm";

import PiuRepository from "../../useCases/Piu/repository/PiuRepository";
import CommentRepository from "../../useCases/Comment/repository/CommentRepository";
import UserRepository from "../../useCases/User/repository/UserRepository";

export const userRepository = new UserRepository();
export const piuRepository = new PiuRepository();
export const commentRepository =  new CommentRepository();
