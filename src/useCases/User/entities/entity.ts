import {Column, Entity, JoinTable, ManyToMany,  OneToMany,    PrimaryGeneratedColumn} from 'typeorm';
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

    @Column({select : false})
    password: string;

    @Column()
    email: string;
    
    @OneToMany( ()=> Piu, (piu) => piu.user, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    pius: Piu[];   
    
    @OneToMany(()=> Comment, (comment) => comment.user, {onDelete: "CASCADE",  onUpdate:"CASCADE"})
    comments: Comment[];
 
    @ManyToMany(()=> Piu, (piu) => piu.users_liked, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    @JoinTable()
    liked_pius: Piu[];

    @ManyToMany(()=> Piu, (piu) => piu.users_favorited, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    @JoinTable()
    favorited_pius: Piu[];

    @ManyToMany(() => User, user => user.followers, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinTable({ name: 'user_follow_user'})
    following: User[];

    @ManyToMany(() => User, user => user.following)
    followers: User[];

    
}
