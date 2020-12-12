import {Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Comment } from '../../Comment/entities/entity';
import { Piu } from '../../Piu/entities/entity';


@Entity('users')
export class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    photo: string;

    @Column()
    description: string;

    @Column()
    age: string;

    @Column()
    password: string;
    
    @OneToMany( ()=> Piu, (piu) => piu.user_id, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    pius: Piu[];   
    
    @OneToMany(()=> Comment, (comment) => comment.piu_id, {onDelete: "CASCADE"})
    commented_pius: Piu[];
    
    @ManyToMany(()=> Piu, (piu) => (piu.users_liked, piu.users_favorited), {onDelete: "CASCADE", onUpdate:"CASCADE"})
    liked_pius: Piu[];
    favorited_pius: Piu[];
}
