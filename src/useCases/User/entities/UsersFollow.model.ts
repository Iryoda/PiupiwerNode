// import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

// import { User } from "./entity";

// @Entity('user_follow_user')
// export class UserFollowUser{

//     @PrimaryColumn()
//     user_id: string;

//     @PrimaryColumn()
//     follower_id: string

//     @ManyToOne( () => User, user => user.following, { cascade: true})
//     @JoinColumn({name: 'user_id'})
//     users = User;

//     @ManyToOne( () => User, user => user.followers, { cascade: true})
//     @JoinColumn({name: 'follower_id'})
//     followers = User;
// }