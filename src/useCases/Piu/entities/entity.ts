import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp} from 'typeorm';
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

    @Column({ nullable: true })
    user_id: string;

    @OneToMany(()=> Comment, (comment) => comment.piu, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    comments: Comment[];
    
    @ManyToOne(()=> User, (user) => user.pius)
    @JoinColumn({name: "user_id"})
    user: string;

    @ManyToMany(()=> User, (user)=> user.favorited_pius)
    users_favorited: User[];
    
    @ManyToMany(()=> User, (user) => user.liked_pius)
    users_liked: User[];

}