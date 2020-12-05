import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp} from 'typeorm';
import { Comment } from '../../Comment/entities/entity';
import { User } from '../../User/entities/entity';

@Entity('pius')
export class Piu{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    content: string;

    @Column({type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @ManyToOne(()=> User, (user) => user.pius)
    @JoinColumn({name: "user_id"})
    user_id: string;

    @ManyToMany(()=> User, (user)=> (user.liked_pius, user.favorited_pius ))
    users_liked: User[];
    users_favorited: User[];

      
    @OneToMany(()=> Comment, (comment) => comment.piu_id, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    comments: Comment[];

}