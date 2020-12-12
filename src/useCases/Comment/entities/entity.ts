import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Piu } from '../../Piu/entities/entity';
import { User } from '../../User/entities/entity';

@Entity('comments')
export class Comment{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    content: string;

    @ManyToOne(()=> Piu, (piu)=> piu.comments)
    @JoinColumn({name: "piu_id"})
    piu_id: string;

    @ManyToOne(()=> User, (user) => user.comments)
    @JoinColumn({name:"user_id"})
    user_id: string;
}