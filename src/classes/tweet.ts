import { randomUUID} from 'crypto'
import { User } from './user';


export class Tweet {
    private _id: string = randomUUID();
    public likes: User [];
    public replies: Tweet[];

    constructor(
        public username: string,
        public content: string
    ) {
        this.likes = [];
        this.replies = [];
    }

    public get id() : string {
        return this._id
    }

    public reply(tweetReply: Tweet): void {
        this.replies.push(tweetReply);
    }

    public like(userLike: User): void {
        this.likes.push(userLike)       
    }

    public show(): void {
        console.log(`@${this.username}: ${this.content}`);
        
        if (this.likes.length === 1) {
            console.log(`@${this.likes[0].username} curtiu`);
        } 

        if (this.likes.length > 1) {
            const firstUsername = this.likes[0].username;
            const remainingLikes = this.likes.length - 1;
            console.log(`@${firstUsername} e mais ${remainingLikes} curtiram`);
        }

        if (this.replies.length > 0) {
            this.showReplies(); 
        }
        
        console.log(`\n---------------------- \n`);
    }

    public showReplies(): void {
        this.replies.forEach(reply => {
            console.log("\t >", `${reply.username}:`, reply.content);
        });
    }
}